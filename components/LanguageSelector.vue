<template>
  <select v-model="locale">
    <option v-for="option in availableLocales" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, availableLocales } = useI18n()

onMounted(() => {
  locale.value = navigator.language.split('-')[0]
})
</script>
