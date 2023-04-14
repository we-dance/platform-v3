<template>
  <component :class="classes" :is="heroIcons[name]" />
</template>

<script>
import * as heroIcons from '@heroicons/vue/24/solid'

export default {
  data() {
    return {
      heroIcons,
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
  computed: {
    classes() {
      return !this.size ? 'w-6 h-6' : `w-${this.size} h-${this.size}`
    },
  },
}
</script>
