import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/coingecko': { // Define a path prefix for your API requests
        target: 'https://api.coingecko.com',
        changeOrigin: true, // Important for some APIs
        rewrite: (path) => path.replace(/^\/api\/coingecko/, ''), // Remove the prefix
      },
    },
  },
});