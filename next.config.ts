import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/la-healthy-mit",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
