<template>
  <div class="bg-slate-700 flex justify-center items-center min-h-screen">
    <FormKit
      type="form"
      v-model="data"
      @submit="handleSubmit"
      form-class="
    bg-white rounded p-8 max-w-sm mt-20
    "
      :submit-attrs="{
        'input-class':
          ' ml-[240px] bg-red-700 mt-3 no-underline text-white font-semibold py-2 px-4 rounded-full hover:text-white hover:bg-black shadow cursor-pointer outline-none focus:outline-none inline-block',
      }"
    >
      <div class="space-y-4">
        <!-- <FormKit
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
        /> -->
        <FormKitSchema :schema="schema"  />
      </div>
    </FormKit>
  </div>
</template>

<script>

const classes = {
  label: 'block text-gray-700 text-sm font-bold mb-2',
  input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
}

export default {
  data() {
    return {
      data: {
        email: '',
        favorite_food: '',
        instructions: '',
      },
      schema: [
        {
          // $formkit: 'text',
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
          // $formkit: 'password',
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
          // $formkit: 'text',
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
          // $formkit: 'select',
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
          // $formkit: 'select',
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
