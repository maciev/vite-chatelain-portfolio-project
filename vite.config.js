import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      //include: "**/*.jsx",
    }),
  ],
  //content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  server: {
    hmr: true,
    //watch: {
    //  usePolling: true,
    //},
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
