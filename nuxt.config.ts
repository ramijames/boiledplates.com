// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: [
    '~/assets/main.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],
  googleFonts: {
    families: {
      'Source Serif Pro': [400, 600, 700, 900],
      'Noto Sans': [400, 600, 700, 900],
    }
  }
})