import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    "import.meta.env.ENV_VARIABLE": JSON.stringify(process.env.ENV_VARIABLE),
  },
});
