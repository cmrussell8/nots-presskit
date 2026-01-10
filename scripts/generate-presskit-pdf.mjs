import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";
import { put } from "@vercel/blob";
import { existsSync } from "node:fs";

/* global window */

const exportUrl = process.env.PRESSKIT_EXPORT_URL;
const sha = process.env.PRESSKIT_SHA;

if (!exportUrl) {
  throw new Error("PRESSKIT_EXPORT_URL is required.");
}

if (!sha) {
  throw new Error("PRESSKIT_SHA is required.");
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error("BLOB_READ_WRITE_TOKEN is required.");
}

const version = sha.slice(0, 12);
const pdfKey = `presskit/presskit.${version}.pdf`;
const manifestKey = "presskit/presskit-latest.json";

const isServerless =
  Boolean(process.env.VERCEL) ||
  Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

const preferredLocalPaths = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

let executablePath = await chromium.executablePath();

if (!isServerless) {
  const localPath =
    preferredLocalPaths.find((path) => existsSync(path)) ?? executablePath;
  executablePath = localPath;
}

if (!executablePath) {
  throw new Error(
    "Chrome executable not found. Set CHROME_PATH or PUPPETEER_EXECUTABLE_PATH."
  );
}

console.log(`Generating presskit PDF from ${exportUrl}`);

const browser = await puppeteer.launch({
  args: chromium.args,
  defaultViewport: { width: 1920, height: 1080 },
  executablePath,
  headless: true,
});

try {
  const page = await browser.newPage();
  page.setDefaultTimeout(30000);

  page.on("console", (message) => {
    console.log(`[page:${message.type()}] ${message.text()}`);
  });
  page.on("pageerror", (error) => {
    console.log(`[page:error] ${error.message}`);
  });
  page.on("requestfailed", (request) => {
    console.log(`[page:requestfailed] ${request.url()} ${request.failure()?.errorText}`);
  });

  const targetUrl = new URL(exportUrl);
  targetUrl.searchParams.set("pdf", "1");

  const response = await page.goto(targetUrl.toString(), {
    waitUntil: "networkidle0",
  });
  console.log(`[page] response status ${response?.status() ?? "unknown"}`);
  await page.emulateMediaType("screen");
  await page.evaluate(() => {
    document.body.classList.add("pdf-export");
  });

  await page.waitForSelector(".presskit-frame", { timeout: 60000 });
  await page.waitForFunction(() => window.__presskitRevealReady === true, {
    timeout: 60000,
  });

  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.images);
    await Promise.all(
      images.map(
        (img) =>
          img.complete ||
          new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          })
      )
    );
  });

  await page.evaluate(() => {
    window.__presskitReveal.configure({
      transition: "none",
      backgroundTransition: "none",
    });
  });

  const slideCount = await page.evaluate(
    () => document.querySelectorAll(".reveal .slides > section").length
  );

  if (!slideCount) {
    throw new Error("No slides found for PDF export.");
  }

  const frame = await page.$(".presskit-frame");
  if (!frame) {
    throw new Error("Presskit frame not found.");
  }

  const pdfDoc = await PDFDocument.create();

  for (let index = 0; index < slideCount; index += 1) {
    await page.evaluate((slideIndex) => {
      window.__presskitReveal.slide(slideIndex);
    }, index);

    await page.waitForFunction(
      (slideIndex) => window.__presskitReveal.getIndices().h === slideIndex,
      {},
      index
    );

    await new Promise((resolve) => setTimeout(resolve, 150));

    const jpeg = await frame.screenshot({
      type: "jpeg",
      quality: 82,
    });

    const image = await pdfDoc.embedJpg(jpeg);
    const { width, height } = image.scale(1);
    const pageRef = pdfDoc.addPage([width, height]);
    pageRef.drawImage(image, { x: 0, y: 0, width, height });
  }

  const pdfBytes = await pdfDoc.save();
  const pdfResult = await put(pdfKey, pdfBytes, {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/pdf",
    cacheControlMaxAge: 31536000,
  });

  const manifest = {
    version,
    url: pdfResult.url,
    generatedAt: new Date().toISOString(),
  };

  const manifestResult = await put(manifestKey, JSON.stringify(manifest), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    cacheControlMaxAge: 0,
  });

  console.log(`PDF uploaded: ${pdfResult.url}`);
  console.log(`Manifest uploaded: ${manifestResult.url}`);
} finally {
  await browser.close();
}
