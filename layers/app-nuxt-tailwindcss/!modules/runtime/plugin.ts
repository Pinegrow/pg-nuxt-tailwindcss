import path from 'path'
import fs from 'fs'
import { updateSiteConfig } from 'nuxt-site-config-kit'
import { nuxtApp } from '../site-config'

const isExistsAndFile = (filePath) =>
  !!(fs.existsSync(filePath) && fs.statSync(filePath).isFile())

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('site-config:init', async () => {
    // 1. siteMeta from app's srcDir
    let srcDir = path.resolve(nuxtApp.options.srcDir, 'site.ts')

    if (!isExistsAndFile(srcDir)) {
      // 2. siteMeta from layer's srcDir
      srcDir = path.resolve('../site.ts')
    }

    if (isExistsAndFile(srcDir)) {
      const siteMeta = await import(srcDir)
      updateSiteConfig(siteMeta)
    }
  })
})
