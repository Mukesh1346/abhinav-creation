/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables sharp image optimization
  },
};

module.exports = nextConfig;
