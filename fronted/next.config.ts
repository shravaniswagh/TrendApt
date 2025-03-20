import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_APTOS_PRIVATE_KEY: "0x448fcb1a02fa6dffe1e989ac9b0fda959c774d82965527b2dc9b49d33abc2164",
  },
};

export default nextConfig;
