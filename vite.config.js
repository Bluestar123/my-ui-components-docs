import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [],
    exclude: [],
  },
  plugins: [vue()],
  build: {
    minify: true,
    lib: {
      entry: resolve('./src/index.ts'),
      name: 'my-ui-components-docs',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
