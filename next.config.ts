import type { NextConfig } from "next";

const presskitVersion =
  (process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.GIT_COMMIT_SHA ??
    process.env.COMMIT_SHA ??
    "").slice(0, 12);

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_PRESSKIT_VERSION: presskitVersion,
  },
  outputFileTracingIncludes: {
    "/api/presskit-pdf": ["./node_modules/@sparticuz/chromium/**"],
    "app/api/presskit-pdf/route": ["./node_modules/@sparticuz/chromium/**"],
  },
};

export default nextConfig;
