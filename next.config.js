/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "files.stripe.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
