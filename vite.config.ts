import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("./src"),
      },
      {
        find: "#",
        replacement: resolve("./types"),
      },
    ],
  },
  base: "/",
  server: {
    host: true,
    open: true,
    port: 9527,
  },
});
