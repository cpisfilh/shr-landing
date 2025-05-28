import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    modulePreload: true,
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id
              .toString()
              .split('node_modules/')[1]
              .split('/');
            // Manejar scoped packages como @react-spring/core
            const name = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
            return `vendor/${name}`;
          }
        }
      },
      treeshake: true
    }
  }
});
