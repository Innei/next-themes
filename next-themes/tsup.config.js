import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.tsx'
  },
  sourcemap: false,
  minify: true,
  dts: true,
  clean: true,
  external: ['react'],
  format: ['esm', 'cjs'],
  loader: {
    '.js': 'jsx'
  }
})
