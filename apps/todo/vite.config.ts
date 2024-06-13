import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
  },
  plugins: [
    react(),
    federation({
      name: 'todo',
      filename: 'remoteEntry.js',
      exposes: {
        './Test': './src/components/Test.tsx',
      },
    }),
  ],
})
