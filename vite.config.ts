import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // Removemos o build.rollupOptions.input manualmente
  // Deixa o Vinxi decidir o ponto de entrada
});