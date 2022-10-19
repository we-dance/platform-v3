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
          label="Email"
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
          label="Password"
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
          label="Username"
          name="username"
          validation="required|min:6"
          help="Use only letters, numbers, underscores and periods"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />

        <FormKit
          type="select"
          label="Dancing in"
          name="dancing_in"
          placeholder="City"
          :options="['Pizza', 'Ice Cream', 'Burger']"
          help="In which city are you currently dancing?"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />

        <FormKit
          type="select"
          label="Living in"
          name="living_in"
          placeholder="City"
          :options="['Pizza', 'Ice Cream', 'Burger']"
          help="What's your permanent residence?"
          :classes="{
            label: classes.label,
            input: classes.input,
            error: 'text-red-500',
            help: 'text-gray-500',
          }"
        />
        <!-- <FormKitSchema :schema="schema" /> -->
        <p class="mt-4 text-xs">
          By signing in, you agree to Terms of service and Privacy policy.
        </p>
      </div>
    </FormKit>
  </div>
</template>

<script>
const classes = {
  label: 'block text-gray-700 text-sm font-bold mb-2',
  input:
    'block text-sm w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
}

const logo = './static/svg/logo-horizontal-dark.svg'

export default {
  data() {
    return {
      data: {
        email: '',
        favorite_food: '',
        instructions: '',
      },
      classes,
      schema: [
        {
          $cmp: 'FormKit',
          props: {
            type: 'text',
            name: 'email',
            label: 'Email',
            validation: 'required|email',
            classes: {
              label: classes.label,
              input: classes.input,
              error: 'text-red-500',
              help: 'text-gray-500',
            },
          },
        },
        {
          $cmp: 'FormKit',
          props: {
            type: 'password',
            name: 'password',
            label: 'Password',
            validation: 'required|min:6',
            classes: {
              label: classes.label,
              input: classes.input,
              error: 'text-red-500',
              help: 'text-gray-500',
            },
          },
        },
        {
          $cmp: 'FormKit',
          props: {
            type: 'text',
            name: 'username',
            label: 'Username',
            validation: 'required|min:6',
            help: 'Use only letters, numbers, underscores and periods',
            classes: {
              label: classes.label,
              input: classes.input,
              error: 'text-red-500',
              help: 'text-gray-500',
            },
          },
        },
        {
          $cmp: 'FormKit',
          props: {
            type: 'select',
            name: 'dancing_in',
            label: 'Dancing in',
            placeholder: 'City',
            options: ['Pizza', 'Ice Cream', 'Burger'],
            help: 'In which city are you currently dancing?',
            classes: {
              label: classes.label,
              input: classes.input,
              error: 'text-red-500',
              help: 'text-gray-500',
            },
          },
        },
        {
          $cmp: 'FormKit',
          props: {
            type: 'select',
            name: 'living_in',
            label: 'Living in',
            placeholder: 'City',
            options: ['Pizza', 'Ice Cream', 'Burger'],
            help: "What's your permanent residence?",
            classes: {
              label: classes.label,
              input: classes.input,
              error: 'text-red-500',
              help: 'text-gray-500',
            },
          },
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      // Do something with the data
      console.log(this.data)
    },
  },
}
</script>
