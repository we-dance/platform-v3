export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3', '@formkit/nuxt'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
  },
})
