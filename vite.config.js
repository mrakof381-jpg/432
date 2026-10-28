import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Если у вас была настройка base (например, './' или '/Neonbet-Casino/'), раскомментируйте и укажите её:
    // base: './', 
    
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 5173,
    },
  }
})
