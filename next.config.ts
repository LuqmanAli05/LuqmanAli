import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isHostinger = process.env.NEXT_PUBLIC_HOSTING === "hostinger";

const nextConfig: NextConfig = {
  // Uncomment for static export (not needed for Hostinger Node.js app)
  // output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Add any production-specific settings here
  ...(isProduction && {
    // Example: compress in production
    compress: true,
  }),

  // Add Hostinger-specific settings
  ...(isHostinger && {
    // Add any Hostinger-specific configuration
  }),
};

export default nextConfig;
