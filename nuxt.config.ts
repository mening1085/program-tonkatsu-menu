export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/styles/main.scss", "./assets/styles/css/tailwind.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "nuxt-aos", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Program Tonkatsu",
      short_name: "Program",
      description: "Program Tonkatsu is a Food Japanese Restaurant Styles",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
});
