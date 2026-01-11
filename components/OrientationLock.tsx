"use client";

import { usePresskitDownload } from "./usePresskitDownload";

export default function OrientationLock() {
  const { isDownloading, handleDownload } = usePresskitDownload();

  return (
    <div className="orientation-lock no-print">
      <div className="orientation-lock__panel">
        <span className="orientation-lock__label">Rotate your device</span>
        <span className="orientation-lock__subtext">
          Landscape view required
        </span>
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="orientation-lock__button"
        >
          {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
        <span className="orientation-lock__note">
          View full screen in your PDF viewer
        </span>
      </div>
    </div>
  );
}
