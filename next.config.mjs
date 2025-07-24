import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for now to support dynamic features
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['www.google.com', 'icons.duckduckgo.com', 'favicon.yandex.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons**',
      },
      {
        protocol: 'https',
        hostname: 'icons.duckduckgo.com',
        pathname: '/ip3/**',
      },
      {
        protocol: 'https',
        hostname: 'favicon.yandex.net',
        pathname: '/favicon/**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)