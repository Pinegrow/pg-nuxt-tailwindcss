import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { getFontsWithFallback } from './app/utils/font'
import { safelist } from './app/utils/colors'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindCssPluginPinegrow from '@pinegrow/tailwindcss-plugin'

export default {
  darkMode: 'class',
  plugins: [
    tailwindTypography,
    tailwindForms,
    tailwindCssPluginPinegrow({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  safelist,

  get content() {
    const _content = [
      '{.,app,layers}/{.,*-layer}/components/**/*.{js,vue,ts}',
      '{.,app,layers}/{.,*-layer}/layouts/**/*.vue',
      '{.,app,layers}/{.,*-layer}/pages/**/*.vue',
      '{.,app,layers}/{.,*-layer}/plugins/**/*.{js,ts}',
      '{.,app,layers}/{.,*-layer}/app.vue',
      '{.,app,layers}/{.,*-layer}/*.{mjs,js,ts}',
      '{.,layers}/{.,*-layer}/app.config.{js,ts}',
      '{.,layers}/{.,*-layer}/nuxt.config.{js,ts}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
