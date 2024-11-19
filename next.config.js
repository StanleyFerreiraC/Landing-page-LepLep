/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
