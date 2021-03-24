import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    plugins: [createVuePlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      assetsDir: "static",
      target: ["chrome63"],
    },
    server: {
      port: 18080,
      proxy: {
        "/api/v3": {
          target: process.env.VITE_PCC_BACKEND,
          // ws: true,
          changeOrigin: true,
        },
      },
    },
  };
});
