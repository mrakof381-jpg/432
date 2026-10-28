import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Подставьте сюда нужные вам значения
      __VITE_BRAND_NAME__: JSON.stringify('NeonBet'),
      __VITE_APP_MODE__: JSON.stringify('demo'),
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 5173,
      allowedHosts: [
        'four32-bvbs.onrender.com',
        '.onrender.com'
      ],
    },
  }
})
