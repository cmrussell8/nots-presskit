import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
  target.searchParams.set("print-pdf", "1");
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

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1920, height: 1080 },
    executablePath,
  });

  try {
    const page = await browser.newPage();
    await page.goto(target.toString(), { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");

    await page
      .waitForFunction(
        () => document.documentElement.classList.contains("print-pdf"),
        { timeout: 5000 }
      )
      .catch(() => {});

    const pdf = await page.pdf({
      printBackground: true,
      preferCSSPageSize: true,
    });

    return new NextResponse(pdf, {
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
