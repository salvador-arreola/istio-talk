import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      // custom the default background
      'bg-main': 'bg-[#FFFFFF] text-black dark:(bg-[#000000] text-white)',
    },
    theme: {
      extend: {
        // fonts can be replaced here, remember to update the web font links in `index.html`
        fontFamily: {
          title: ['Clarity City', 'sans-serif'],
          sans: ['Clarity City', 'sans-serif'],
        },
      },
    },
  }),
)
