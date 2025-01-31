/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable export for production (for GitHub Pages)
  output: "export",

  // Set basePath only in production for GitHub Pages (avoid issues locally)
  basePath: "/portfolio",

  webpack: (config, { isServer }) => {
    // Handle media files (mp3, wav) correctly
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: "file-loader",
        options: {
          // Simplified naming pattern
          name: "static/media/[name].[hash].[ext]",
          // Ensure proper path for client-side (GitHub Pages)
          publicPath: "/_next",
          emitFile: !isServer, // Only emit files for client-side
        },
      },
    });

    return config;
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Increase build timeout if needed
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;
