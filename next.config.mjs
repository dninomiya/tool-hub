/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tool-hub',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
