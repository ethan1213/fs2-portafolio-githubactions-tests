import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path para GitHub Pages (https://ethan1213.github.io/fs2-portafolio/)
  base: '/fs2-portafolio/',
  plugins: [react()],
})
