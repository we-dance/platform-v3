import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@intlify/nuxt3', '@formkit/nuxt'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
  },
})
