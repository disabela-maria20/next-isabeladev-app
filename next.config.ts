import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // gera build 100% estático em /out
  reactStrictMode: true,
};

export default nextConfig;
