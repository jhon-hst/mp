import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.24"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pix-cdn77.phncdn.com',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
