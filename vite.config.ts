import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      assets: resolve(__dirname, './assets')
    }
  },
  plugins: [
    react(),
    WindiCSS(),
    Icons({
      compiler: 'jsx',
      jsx: 'react'
    })
  ]
})
