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
				'flex whitespace-nowrap justify-start items-center py-2 px-4 font-medium space-x-2 cursor-pointer outline-none focus:outline-none focus:ring-2 focus:ring-offset-2';
			const xrounded = xbase + ' text-sm leading-4 shadow rounded-full';
			const primaryColor =
				' bg-black text-white border-gray-900 hover:bg-gray-800';
			const destructiveColor =
				' bg-red-500 text-white border-red-500 hover:bg-red-800';
			const baseColor =
				' bg-white text-gray-700 border-gray-300 hover:bg-gray-100';

			const map = {
				simple: xrounded + baseColor,
				primary: xrounded + primaryColor,
				secondary: xrounded + baseColor,
				tertiary: xrounded + ' underline shadow-none',
				destructive: xrounded + destructiveColor,
				icon: 'rounded-full hover:text-primary',
			};
			return map[this.type];
		},
	},
}
</script>
