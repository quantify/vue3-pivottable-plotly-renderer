import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [ vue() ],
  publicDir: false,
  build: {
    type: ['es', 'umd'],
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PlotlyRenderer',
      fileName: 'plotly-renderer'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})
