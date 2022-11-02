<template>
  <div class="bg-[#210309] flex justify-center items-center min-h-screen">
    <FormKit
      type="form"
      v-model="data"
      @submit="handleSubmit"
      form-class="
    bg-white rounded p-8 max-w-sm mt-20
    "
      :submit-attrs="{
        'input-class':
          ' ml-[240px] bg-[#F1023D] mt-3 no-underline text-white font-semibold py-2 px-4 rounded-full hover:text-white hover:bg-black shadow cursor-pointer outline-none focus:outline-none inline-block',
      }"
    >
      <div class="space-y-4">
        <img src="" alt="" class="w-40 justify-center align-middle mx-auto" />

        <FormKit
          type="text"
          :label="$t('Email')"
          name="email"
          validation="required|email"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />
        <FormKit
          type="password"
          :label="$t('Password')"
          name="password"
          validation="required|min:6"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />
        <FormKit
          type="text"
          :label="$t('Username')"
          name="username"
          validation="username_validation"
          validation-visibility="live"
          :validation-rules="{ username_validation }"
          :validation-messages="{
            username_validation: $t('Ivalid Character'),
          }"
          :help="$t('Use only letters, numbers, underscores and periods')"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />

        <FormKit
          :type="autoComplete"
          :label="$t('Dancing in')"
          name="dancing_in"
          placeholder="City"
          :options="country"
          :help="$t('In which city are you currently dancing?')"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />

        <FormKit
          :type="autoComplete"
          :label="$t('Living in')"
          name="living_in"
          placeholder="City"
          :options="country"
          :help="$t('What\'s your permanent residence?')"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />
        <p class="mt-4 text-xs">
          {{
            $t(
              'By signing in, you agree to Terms of service and Privacy policy.'
            )
          }}
        </p>
      </div>
    </FormKit>
  </div>
</template>

<script setup>
import { createInput } from '@formkit/vue'
import InputAutoComplete from '~~/components/InputAutoComplete.vue'

const autoComplete = createInput(InputAutoComplete, {
  props: ['options'],
})

const country = [
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Portugal',
  'United Kingdom',
  'Netherlands',
  'Belgium',
  'Luxembourg',
  'Austria',
  'Switzerland',
  'Sweden',
]

const classes = {
  label: 'block text-gray-700 text-sm font-bold mb-2',
  input:
    'block text-sm w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
}

const logo = './static/svg/logo-horizontal-dark.svg'

// custom validation for formkit that checks "only letters, numbers, underscores and periods"
const user_validation = function ({ value }) {
  return new Promise((resolve, reject) => {
    resolve(value === '' || /^[a-zA-Z0-9_.]+$/.test(value))
  })
}
</script>
