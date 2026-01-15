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

  // Ensure environment variables are available
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,
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
