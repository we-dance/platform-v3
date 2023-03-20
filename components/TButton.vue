<template>
  <button type="button" :class="classes" :title="title">
    <slot>
      <TIcon v-if="icon" :size="iconSize" :name="icon" />
      <span v-if="label !== false"> {{ label }}</span>
    </slot>
  </button>
</template>

<script>
import TIcon from '~/components/TIcon'

export default {
  components: {
    TIcon,
  },

  props: {
    title: {
      type: String,
      default: 'continue',
    },
    type: {
      type: String,
      default: 'simple',
    },
    label: {
      type: [String, Number, Boolean],
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      const xbase =
        'flex justify-start items-center py-2 px-4 font-medium space-x-2 cursor-pointer outline-none focus:outline-none focus:ring-2 focus:ring-offset-2'
      const xrounded =
        xbase + ' text-sm leading-4 justify-center shadow rounded-full'
      const primaryColor =
        ' bg-black text-white border-gray-900 hover:bg-gray-800'
      const successColor =
        ' bg-green-500 text-white border-green-500 hover:bg-green-800'
      const dangerColor =
        ' bg-red-500 text-white border-red-500 hover:bg-red-800'
      const baseColor =
        ' bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      const toggledColor =
        ' text-primary border-primary bg-red-100 hover:bg-red-200'
      const map = {
        round: xrounded + baseColor,
        simple: xrounded + baseColor,
        base: xrounded + baseColor,
        secondary: xrounded + baseColor,
        xs: xrounded + baseColor,
        icon: 'rounded-full hover:text-primary',
        toggled: xrounded + toggledColor,
        primary: xrounded + primaryColor,
        tertiary: xrounded + baseColor + ' underline',
        success: xrounded + successColor,
        danger: xrounded + dangerColor,
        link: 'underline hover:no-underline font-semibold',
        context: xbase + ' w-full hover:bg-indigo-500 hover:text-white',
        'context-active': xbase + 'w-full bg-indigo-500 text-white',
        nav: xbase + ' rounded-full hover:bg-red-100 hover:text-primary',
        void: xbase,
      }
      return map[this.type]
    },
  },
}
</script>
