<template>
  <Combobox v-model="selectedCountry">
    <ComboboxInput
      @change="query = $event.target.value"
      class="block text-sm w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500"
    />

    <ComboboxOptions>
      <div
        class="mt-1 w-full border rounded shadow-sm block text-sm w-full px-3 h-auto max-h-[250px] overflow-y-auto"
      >
        <ComboboxOption
          v-for="country in filteredCountry"
          :key="country.id"
          :value="country"
          class="cursor-pointer mx-auto my-2 text-base"
        >
          {{ country }}
        </ComboboxOption>
      </div>
    </ComboboxOptions>
  </Combobox>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

const props = defineProps({
  context: Object,
})

const country = await props.context.options

console.log(country)

// const people = [
//   'Durward Reynolds',
//   'Kenton Towne',
//   'Therese Wunsch',
//   'Benedict Kessler',
//   'Katelyn Rohan',
// ]
const selectedCountry = ref(country[0])
const query = ref('')

const filteredCountry = computed(() =>
  query.value === ''
    ? country
    : country.filter((person) => {
        return person.toLowerCase().includes(query.value.toLowerCase())
      })
)
</script>
