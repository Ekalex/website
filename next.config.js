/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
};

module.exports = { images: {domains: ['gs://website-211bf.appspot.com/']}};
