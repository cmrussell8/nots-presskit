"use client";

import { useCallback, useState } from "react";

const DEFAULT_URL = "/api/presskit-pdf";
const FILE_NAME = "nots-presskit.pdf";

export const usePresskitDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const manifestUrl = process.env.NEXT_PUBLIC_PRESSKIT_MANIFEST_URL;
  const currentVersion = process.env.NEXT_PUBLIC_PRESSKIT_VERSION ?? "";

  const downloadFrom = useCallback(async (url: string) => {
    const response = await fetch(url, { cache: "no-store" });
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
    let cacheBuster = Date.now().toString();

    if (manifestUrl) {
      try {
        const manifestResponse = await fetch(manifestUrl, { cache: "no-store" });
        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          if (manifest?.url) {
            const manifestVersion =
              typeof manifest.version === "string" ? manifest.version : "";

            if (
              currentVersion &&
              manifestVersion &&
              manifestVersion !== currentVersion
            ) {
              console.warn(
                "Presskit manifest is stale; falling back to on-demand PDF."
              );
            } else {
              targetUrl = manifest.url;
              cacheBuster = manifestVersion || cacheBuster;
            }
          }
        }
      } catch (error) {
        console.warn("Failed to load PDF manifest", error);
      }
    }

    try {
      const downloadUrl = new URL(targetUrl, window.location.origin);
      downloadUrl.searchParams.set("v", cacheBuster);
      await downloadFrom(downloadUrl.toString());
    } catch (error) {
      if (targetUrl !== DEFAULT_URL) {
        const fallbackUrl = new URL(DEFAULT_URL, window.location.origin);
        fallbackUrl.searchParams.set("v", Date.now().toString());
        await downloadFrom(fallbackUrl.toString());
      } else {
        throw error;
      }
    } finally {
      setIsDownloading(false);
    }
  }, [currentVersion, downloadFrom, isDownloading, manifestUrl]);

  return { isDownloading, handleDownload };
};
