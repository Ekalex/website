/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['gs://website-211bf.appspot.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
