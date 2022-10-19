<template>
  <select v-model="locale">
    <option v-for="option in availableLocales" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
const availableLocales = ['en', 'de', 'es', 'ru']
const locale = ref('en')
// import { useI18n } from 'vue-i18n'
// const { locale, availableLocales } = useI18n()

onMounted(() => {
  locale.value = navigator.language
})
</script>
