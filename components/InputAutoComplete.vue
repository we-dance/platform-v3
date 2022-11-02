<template>
    <div
    class="w-full border rounded shadow-sm block text-sm w-full px-3 py-2 overflow-y-auto h-auto max-h-[250px]"
  >
    <div class="cursor-pointer mx-auto text-base" :onclick="open">{{search ? search : "Search"}}</div>
    <input
      v-if="showSearch"
      v-model="search"
      type="text"
      class="block text-sm w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500"
      @blur="close"
    />
    <ul v-if="showSearch">
      <li
        v-for="item in filteredOptions"
        :key="item"
        @click="select(item)"
        class="cursor-pointer mx-auto my-2 text-base"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  context: Object,
})


const search = ref('')
const showSearch = ref(false)

const filteredOptions = computed(() => {
  return props.context.options.filter((option) => {
    showSearch.value = true
    return option.toLowerCase().includes(search.value.toLowerCase())
  })
  return props.options
})

const close = () => {
  setTimeout(() => {
    showSearch.value = false
  }, 100)
}

const open = () => {
  showSearch.value = !showSearch.value
}

const select = (item) => {
  if (item) {
    search.value = item
  }
  showSearch.value = false
}
</script>