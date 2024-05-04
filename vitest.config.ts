// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': './src'
    }
  },
  test: {
    environment: 'jsdom',
  },
});