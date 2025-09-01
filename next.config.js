const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    const id = await nextBuildId({ dir: __dirname, describe: true });
    process.env.NEXT_PUBLIC_BUILD_ID = id;
    return id;
  },

  env: {
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID,
  },
};

module.exports = nextConfig;