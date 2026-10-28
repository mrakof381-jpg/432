import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: './', // Судя по README, у вас используется относительный base
  server: {
    host: '0.0.0.0', // Обязательно для Render
    port: process.env.PORT || 5173, // Render передает порт через переменную окружения
  },
})
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [
      react(),
      {
        name: "brand-metadata",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            const name = (env.VITE_BRAND_NAME || "NeonBet").replace(
              /[&<>"']/g,
              (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
            );
            return html.replaceAll("%VITE_BRAND_NAME%", name);
          },
        },
      },
    ],
    base: "./",
    build: { target: "es2022", manifest: true },
  };
});
