import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    browserToTerminal: true
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  serverExternalPackages: ["mssql", "tedious", "@azure/identity", "@prisma/adapter-mssql"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
