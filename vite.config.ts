import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as path from 'path'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: format => `metriqa.${format}.js`,
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
