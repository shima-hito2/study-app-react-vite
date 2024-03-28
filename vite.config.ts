import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/study-app-react-vite/',
  plugins: [react()],
    // serverオプションを追加
    server: {
      // port番号を指定
      port: 3000,
    }
})
