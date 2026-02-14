import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    APP_VERSION: process.env.APP_VERSION || "1.0.0",
    BUILD_TIME: process.env.BUILD_TIME || new Date().toISOString(),
  },
};

export default nextConfig;
