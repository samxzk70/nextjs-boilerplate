import type { NextConfig } from "next";
import nextBuildId from "next-build-id";


const nextConfig: NextConfig = {
  generateBuildId: async () => {
    const id = await nextBuildId({ dir: __dirname, describe: true });
    process.env.NEXT_PUBLIC_BUILD_ID = id;
    return id;
  },

  env: {
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID,
  },
};

export default nextConfig;
