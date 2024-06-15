import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {};

export default withPWA({
  ...nextConfig,
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});
