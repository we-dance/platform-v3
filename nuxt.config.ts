import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
  },
})
