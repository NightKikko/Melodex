import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
export default {
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'] // Add the path to the external module
    }
  }
}
