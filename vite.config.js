import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Indraquestionnaire2/', // exact repo name, with leading & trailing slashes
})
