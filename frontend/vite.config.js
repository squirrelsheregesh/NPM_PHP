/*
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '/app/dist',
    emptyOutDir: true
  }
});

*/
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Раньше было: /app/dist — теперь локально в frontend/dist
    emptyOutDir: true
  }
});

