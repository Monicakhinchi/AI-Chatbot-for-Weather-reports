/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure this is enabled if you're using the `app` directory
  },
  exportTrailingSlash: false, // Add this line
};

export default nextConfig;