<template>
  <div>
    <TBanner
      v-if="uid && profile"
      v-model="bannerNps"
      desktop="Can you take 30 seconds to help us?"
      mobile="30 seconds to help us?"
      action="Yes"
      :link="`https://j4ripfl7ia1.typeform.com/to/bfWbw6EH#username=${profile.username}`"
    />
    <TBanner
      v-if="bannerNps && profile && profile.daysUsed > 10"
      v-model="bannerV3Beta"
      desktop="Are you ready for WeDance v3?"
      mobile="Are you ready for WeDance v3?"
      action="Request Beta"
      :link="`https://j4ripfl7ia1.typeform.com/to/Flh9wptJ#username=${profile.username}`"
    />

    <div
      class="font-sans leading-normal tracking-normal antialiased min-h-screen flex flex-col mx-auto max-w-2xl border-r"
    >
      <TPopup
        v-if="showAuthPopup"
        :title="$t('popup.auth.title')"
        @close="showAuthPopup = false"
      >
        <div class="my-4 w-64 flex flex-col justify-center text-center">
          <div class="p-4">
            {{ $t('popup.auth.body', { action: showAuthPopup }) }}
          </div>
          <TButton
            allow-guests
            class="mt-2"
            type="primary"
            :to="`/signin?target=${$route.path}`"
            >{{ $t('popup.auth.signin') }}</TButton
          >
        </div>
      </TPopup>

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
          <MainNavigation :uid="uid" :username="username" />
        </div>
      </transition>

      <THamburger v-model="isMenuOpen" class="absolute mt-2 md:hidden" />

      <div class="flex-grow flex">
        <MainNavigation
          :uid="uid"
          :username="username"
          class="hidden md:block flex-initial w-64"
        />
        <nuxt class="flex-grow w-full" />
      </div>
    </div>
  </div>
</template>
