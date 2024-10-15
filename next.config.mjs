/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        pathname: '/media/**',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
};

export default nextConfig;
