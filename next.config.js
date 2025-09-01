const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    const id = await nextBuildId();
    return id;
  },
  env: {
    BUILD_ID: nextBuildId.sync(),
  },
};

module.exports = nextConfig;