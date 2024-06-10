import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Todo': './src/App.tsx',
      },
    }),
  ],
})
