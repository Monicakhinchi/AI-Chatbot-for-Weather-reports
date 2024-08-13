/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features if using Next.js 13+
  experimental: {
    // Enable React 18 features, if needed
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
  },

  // Remove trailing slash from exported HTML files
  trailingSlash: false,

  // Enable internationalization (i18n) support
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },

  // Configure images
  images: {
    domains: ['example.com', 'images.example.com'], // Add domains for external images
  },

  // Configure the page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Configure the powered-by header
  poweredByHeader: false,

  // Configure React strict mode
  reactStrictMode: true,

  // Configure Sass options (if using Sass)
  sassOptions: {
    includePaths: ['node_modules'],
  },

  // Configure Webpack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a custom Webpack plugin if needed
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(buildId),
      })
    );

    // Additional Webpack configurations can go here

    return config;
  },

  // Ensure static assets are handled properly
  assetPrefix: '', // Remove or update based on your deployment setup

  // Optional: for production builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;
