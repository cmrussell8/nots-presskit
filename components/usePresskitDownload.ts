"use client";

import { useCallback, useState } from "react";

const DEFAULT_URL = "/api/presskit-pdf";
const FILE_NAME = "nots-presskit.pdf";

export const usePresskitDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const manifestUrl = process.env.NEXT_PUBLIC_PRESSKIT_MANIFEST_URL;

  const downloadFrom = useCallback(async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Failed to generate PDF");
    }
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(objectUrl);
  }, []);

  const handleDownload = useCallback(async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    let targetUrl = DEFAULT_URL;

    if (manifestUrl) {
      try {
        const manifestResponse = await fetch(manifestUrl, { cache: "no-store" });
        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          if (manifest?.url) {
            targetUrl = manifest.url;
          }
        }
      } catch (error) {
        console.warn("Failed to load PDF manifest", error);
      }
    }

    try {
      await downloadFrom(targetUrl);
    } catch (error) {
      if (targetUrl !== DEFAULT_URL) {
        await downloadFrom(DEFAULT_URL);
      } else {
        throw error;
      }
    } finally {
      setIsDownloading(false);
    }
  }, [downloadFrom, isDownloading, manifestUrl]);

  return { isDownloading, handleDownload };
};
