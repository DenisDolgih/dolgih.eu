import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// Inlines small built stylesheets into index.html so they are not render-blocking requests.
// Anything it can't inline safely keeps its <link> untouched.
const inlineCss = ({ maxSize = 10 * 1024 } = {}) => {
  let base = '/'
  let singleHtml = true

  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      base = config.base
      const input = config.build.rollupOptions.input
      singleHtml = !input || typeof input === 'string' || Object.keys(input).length === 1
    },
    transformIndexHtml(html, ctx) {
      // With a relative base, url()s in the CSS are relative to the CSS file and
      // would resolve against the HTML document once inlined.
      if (!ctx.bundle || !/^(\/|https?:)/.test(base)) return html

      return html.replace(/<link\b[^>]*>/gi, (tag) => {
        if (!/\brel\s*=\s*["']?stylesheet\b/i.test(tag)) return tag

        const href = tag.match(/\bhref\s*=\s*["']?([^"'\s>]+)/i)?.[1]?.split(/[?#]/)[0]
        if (!href?.startsWith(base) || !href.endsWith('.css')) return tag

        const fileName = href.slice(base.length)
        const asset = ctx.bundle[fileName]
        if (asset?.type !== 'asset') return tag

        const css = typeof asset.source === 'string' ? asset.source : new TextDecoder().decode(asset.source)
        if (css.length > maxSize) return tag

        // Keep the file if anything else may still load it (another page, a lazy chunk).
        const referencedElsewhere = Object.values(ctx.bundle).some(
          (out) => out.type === 'chunk' && out.code.includes(fileName)
        )
        if (singleHtml && !referencedElsewhere) delete ctx.bundle[fileName]

        // "</style" inside the CSS would end the <style> element early.
        return `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inlineCss(),
    VitePWA({
      manifest: false,
      // deferred registration script, so it doesn't block rendering
      injectRegister: 'script-defer',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff,png,svg,json}']
      }
    })
  ],
})
