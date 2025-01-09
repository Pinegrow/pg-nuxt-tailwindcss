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
})
