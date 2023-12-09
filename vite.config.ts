import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    scope: "/",
    name: "Tukay",
    start_url: "/",
    short_name: "Tukay",
    display: "standalone",
    theme_color: "#171717",
    orientation: "portrait",
    background_color: "#111110",
    description: "Airdrop, Giveaway, and more",
    icons: [
      {
        sizes: "192x192",
        type: "image/png",
        src: "/android-chrome-192x192.png",
      },
      {
        sizes: "512x512",
        type: "image/png",
        src: "/android-chrome-512x512.png",
      },
      {
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
        src: "/apple-touch-icon.png",
      },
      {
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
        src: "/maskable_icon.png",
      },
    ],
  },
};

export default defineConfig({
  envPrefix: "TUKAY_",
  define: {
    global: "globalThis",
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      // util: "util",
      // process: "process/browser",
      utils: path.resolve(__dirname, "./src/utils"),
      types: path.resolve(__dirname, "./src/types"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      contracts: path.resolve(__dirname, "./src/contracts"),
      constants: path.resolve(__dirname, "./src/constants"),
      components: path.resolve(__dirname, "./src/components"),
      contexts: path.resolve(__dirname, "./src/contexts/index.ts"),
    },
  },
});
