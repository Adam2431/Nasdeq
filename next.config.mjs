import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "service-worker.js",
    dynamicStartUrlRedirect: "/login",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
});
