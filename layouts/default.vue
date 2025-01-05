<template>
  <div class="min-h-screen bg-stone-950 text-white relative">
    <div
      class="absolute top-[30px] left-[30px] lg:top-[100px] lg:left-[100px] z-[999]"
    >
      <button
        @click="toggleMenu"
        class="lg:hidden flex border border-stone-400 bg-stone-900 flex justify-center p-2 items-center rounded-lg"
      >
        <Icon
          name="solar:hamburger-menu-outline"
          class="text-3xl font-bold text-stone-300"
        />
      </button>

      <div
        class="hidden lg:flex items-center h-[50px] space-x-2 bg-stone-900 p-2 rounded-md"
      >
        <button
          @click="toggleMenu"
          class="border border-stone-400 flex justify-center p-2 items-center rounded-md"
        >
          <Icon
            name="solar:hamburger-menu-outline"
            class="text-xl font-bold text-stone-300"
          />
        </button>
        <nuxt-link
          to="/"
          class="uppercase text-2xl khand text-stone-300 font-medium pr-4 border-r border-stone-400"
        >
          Program Tonkatsu
        </nuxt-link>
        <nuxt-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          class="hover:border hover:border-stone-400 hover:bg-stone-800/50 rounded-lg border border-stone-900 flex justify-center p-2 items-center rounded-md transition-all duration-300 uppercase text-stone-300"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="fixed top-0 left-0 w-screen bg-black h-screen bg-opacity-75 flex items-center justify-center"
        >
          <button @click="toggleMenu" class="absolute top-4 right-4">
            <Icon name="ic:baseline-close" class="text-5xl text-white" />
          </button>

          <div class="relative p-4 text-white text-center">
            <nav class="flex flex-col space-y-4">
              <nuxt-link @click="toggleMenu" to="/" class="text-4xl">
                Home
              </nuxt-link>
              <nuxt-link @click="toggleMenu" to="/menu" class="text-4xl">
                Menu
              </nuxt-link>
              <nuxt-link @click="toggleMenu" to="/reservation" class="text-4xl">
                Reservation
              </nuxt-link>
              <nuxt-link @click="toggleMenu" to="/about" class="text-4xl">
                About
              </nuxt-link>
            </nav>
          </div>
        </div>
      </transition>
    </div>
    <slot />
  </div>
</template>

<script setup>
const items = ref([
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Book a Table",
    link: "/reservation",
  },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  console.log("toggleMenu");

  isMenuOpen.value = !isMenuOpen.value;
};
</script>
