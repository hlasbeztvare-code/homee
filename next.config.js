/** @type {import('next').NextConfig} */
const nextConfig = {
  // L-CODE GUARDIAN STANDARD: Security & Performance
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Sharp is integrated by default in Next.js 13+ if installed,
  // but we enforce high-performance optimization here.
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

// Clean code comment: Config synchronized with L-CODE standard.
