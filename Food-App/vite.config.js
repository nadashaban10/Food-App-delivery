import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Food-App-delivery/Food-App/', 
  plugins: [react()],
})
