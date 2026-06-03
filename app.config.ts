import { defineConfig } from '@tanstack/react-start/vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'vercel',
  },
  vite: {
    plugins: [viteTsConfigPaths()],
  },
});