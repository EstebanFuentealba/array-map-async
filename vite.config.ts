// vite.config.ts
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/mapAsync.ts'),
      name: 'mapAsync',
      fileName: (format) => `mapAsync.${format}.js`,
    },
    rollupOptions: {
    },
  },
});