import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spark-stack-international/',
  plugins: [react()],
});
