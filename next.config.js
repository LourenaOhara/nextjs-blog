/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = {
  assetPrefix: './',
  basePath: '/portifolio',
  trailingSlash: true,
}

module.exports = nextConfig