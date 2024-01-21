/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other options
  experimental: {
    serverComponentsExternalPackages: ["@alinea/generated"],
  },
};

export default nextConfig;
