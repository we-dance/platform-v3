export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
  },
})
