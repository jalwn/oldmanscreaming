// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  icon: {
    clientBundle: { scan: true }
  },
  experimental: {
    inlineSSRStyles: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Jalwan Waheed',
      meta: [
        { name: 'description', content: 'Software engineer in the Maldives building distributed systems, middleware, and fullstack applications.' },
        { name: 'theme-color', content: '#475569' },
        { property: 'og:title', content: 'Jalwan Waheed' },
        { property: 'og:description', content: 'Software engineer in the Maldives building distributed systems, middleware, and fullstack applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://oldmanscreaming.com/oldmanscreaming.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})