import { createResolver, defineNuxtModule, addServerPlugin } from '@nuxt/kit'

export let nuxtApp
export default defineNuxtModule({
  setup(options, nuxt) {
    nuxtApp = nuxt
    const resolver = createResolver(import.meta.url)
    addServerPlugin(resolver.resolve('./runtime/plugin.ts'))
  },
  hooks: {
    // 'modules:done': async () => {
    //   // nuxtApp.hook('site-config:init', async () => {
    //   const { resolve } = createResolver(import.meta.url)
    //   // 1. siteMeta from app's srcDir
    //   let srcDir = path.resolve(nuxtApp.options.srcDir, 'site.ts')
    //   if (!isExistsAndFile(srcDir)) {
    //     // 2. siteMeta from layer's srcDir
    //     srcDir = resolve('../site.ts')
    //   }
    //   if (isExistsAndFile(srcDir)) {
    //     const siteMeta = await import(srcDir)
    //     updateSiteConfig(siteMeta)
    //   }
    //   // })
    // },
  },
})
