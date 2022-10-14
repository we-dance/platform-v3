<template>
  <div>
    <div
      class="font-sans leading-normal tracking-normal antialiased min-h-screen flex flex-col mx-auto max-w-2xl border-r"
    >
      <div
        v-if="isMenuOpen"
        class="fixed w-full h-full top-0 left-0 bg-black opacity-50 z-20"
        @click="isMenuOpen = false"
      />
      <transition name="slide">
        <div
          v-if="isMenuOpen"
          class="bg-white fixed left-0 w-56 bottom-0 top-0 z-30 shadow-lg md:hidden"
        >
          <MainNavigation :profile="profile" />
        </div>
      </transition>

      <THamburger v-model="isMenuOpen" class="absolute mt-2 md:hidden" />

      <div class="flex-grow flex">
        <MainNavigation
          :uid="uid"
          :username="username"
          class="hidden md:block flex-initial w-64"
        />
        <slot class="flex-grow w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
const profile = null
</script>
