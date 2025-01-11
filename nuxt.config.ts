import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'pathe'
import presetIcons from '@unocss/preset-icons'
import { bundledLanguages } from 'shiki'

export default defineNuxtConfig({
  // ssr: false,
  // devtools: { enabled: false }, // enabled by default, disable when using standalone Vue devtools

  // Preparation for Nuxt 4 migration
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@pinegrow/nuxt-module'],

  // nitro: {
  //   preset: 'netlify-static',
  // },

  css: [
    '@/assets/css/tailwind.css',
    'lite-youtube-embed/src/lite-yt-embed.css',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  imports: {
    // dirs: ['my-components'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },

  content: {
    // Before Nuxt 4 migration
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'app/content'),
      },
    },
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      //@ts-ignore
      langs: Object.keys(bundledLanguages),
      theme: 'dracula-soft',
    },
  },

  routeRules: {
    '/hidden': { robots: false },
  },

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), Nuxt UI uses the unocss format for icon names
      devtoolsKey: 'devtoolsKey', // see plugins/devtools.client.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        // restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
})
