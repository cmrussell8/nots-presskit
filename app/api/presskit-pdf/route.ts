import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";
import { PDFDocument } from "pdf-lib";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const host =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host");
  const protocol =
    request.headers.get("x-forwarded-proto") ?? "https";

  if (!host) {
    return new NextResponse("Missing host header", { status: 400 });
  }

  const target = new URL(`${protocol}://${host}/`);
  target.searchParams.set("pdf", "1");

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
  ].filter(Boolean) as string[];

  let executablePath = await chromium.executablePath();

  if (!isServerless) {
    const localPath =
      preferredLocalPaths.find((path) => existsSync(path)) ?? executablePath;
    executablePath = localPath;
  }

  if (!executablePath) {
    return new NextResponse(
      "Chrome executable not found. Set CHROME_PATH or PUPPETEER_EXECUTABLE_PATH.",
      { status: 500 }
    );
  }

  const scaleRaw = Number(process.env.PRESSKIT_PDF_SCALE ?? 2);
  const scaleFactor = Number.isFinite(scaleRaw)
    ? Math.min(4, Math.max(1, scaleRaw))
    : 2;
  const imageType =
    process.env.PRESSKIT_PDF_IMAGE_TYPE === "png" ? "png" : "jpeg";
  const jpegQualityRaw = Number(process.env.PRESSKIT_PDF_JPEG_QUALITY ?? 96);
  const jpegQuality = Number.isFinite(jpegQualityRaw)
    ? Math.min(100, Math.max(1, Math.round(jpegQualityRaw)))
    : 96;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: scaleFactor,
    },
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(60000);
    await page.goto(target.toString(), { waitUntil: "networkidle0" });
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
      return new NextResponse("No slides found for PDF export.", {
        status: 500,
      });
    }

    const frame = await page.$(".presskit-frame");
    if (!frame) {
      return new NextResponse("Presskit frame not found.", { status: 500 });
    }

    const pdfDoc = await PDFDocument.create();
    const frameBox = await frame.boundingBox();
    const pageWidth = frameBox?.width ?? 1920;
    const pageHeight = frameBox?.height ?? 1080;

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

      const screenshot = await frame.screenshot({
        type: imageType,
        quality: imageType === "jpeg" ? jpegQuality : undefined,
      });

      const image =
        imageType === "jpeg"
          ? await pdfDoc.embedJpg(screenshot)
          : await pdfDoc.embedPng(screenshot);
      const pageRef = pdfDoc.addPage([pageWidth, pageHeight]);
      pageRef.drawImage(image, {
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
      });
    }

    const pdf = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"nots-presskit.pdf\"",
        "Cache-Control": "no-store",
      },
    });
  } finally {
    await browser.close();
  }
}
