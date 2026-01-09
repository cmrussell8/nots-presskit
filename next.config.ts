import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/presskit-pdf": ["./node_modules/@sparticuz/chromium/**"],
      "app/api/presskit-pdf/route": ["./node_modules/@sparticuz/chromium/**"],
    },
  },
};

export default nextConfig;
