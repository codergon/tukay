import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envPrefix: "TUKAY_",
  define: {
    global: "globalThis",
  },
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
