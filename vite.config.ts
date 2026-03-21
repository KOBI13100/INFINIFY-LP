import { defineConfig } from 'vite'
import path from 'path'
const __dirname = new URL('.', import.meta.url).pathname
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// Resolves Figma Make's "figma:asset/<hash>.ext" imports to local assets
const figmaAssetPlugin = {
  name: 'figma-asset-resolver',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      const filename = id.replace('figma:asset/', '')
      return path.resolve(__dirname, 'src/assets', filename)
    }
  },
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin,
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    compression({ algorithm: 'gzip', threshold: 1024 }),
    compression({ algorithm: 'brotliCompress', threshold: 1024 }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion'],
        },
      },
    },
  },
})
