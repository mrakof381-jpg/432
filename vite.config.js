import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 5173,
      allowedHosts: [
        'four32-bvbs.onrender.com', // Ваш домен Render
        '.onrender.com'             // Разрешает любые поддомены onrender.com
      ],
    },
  }
})
