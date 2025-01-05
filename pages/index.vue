<template>
  <div>
    <Transition name="fade">
      <div
        class="flex flex-wrap xl:flex-nowrap gap-6 xl:h-screen lg:h-full h-full lg:p-16 md:p-10 sm:p-6 p-6 relative"
      >
        <div class="xl:w-3/4 w-full xl:max-h-full overflow-hidden relative">
          <img
            src="../assets/images/food4.png"
            class="h-full w-full object-cover rounded-xl"
            alt=""
          />

          <div
            class="absolute bottom-[10%] left-0 bg-stone-950 py-3 md:py-6 px-6 md:px-16 z-10"
          >
            <div class="text-white">
              <h1
                class="md:text-[20px] lg:text-[26px] uppercase text-stone-400 khand"
              >
                Welcome to our restaurant
              </h1>
              <div
                class="text-[40px] md:text-[60px] lg:text-[100px] font-semibold uppercase -mt-2 md:-mt-4 lg:-mt-8 text-stone-400 khand"
              >
                Program
              </div>
              <div
                class="text-[40px] md:text-[60px] lg:text-[100px] font-semibold uppercase -mt-6 md:-mt-10 lg:-mt-16 pl-16 text-orange-300 khand"
              >
                Tonkatsu
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/4 w-full gap-6 flex xl:flex-col flex-wrap">
          <div
            class="overflow-hidden relative menu_list md:flex-1 sm:flex-0 w-full"
            v-for="(item, i) in items"
            :key="i"
          >
            <img
              :src="item.image"
              class="object-cover rounded-xl w-full md:h-full sm:h-[350px] transition-all duration-500"
              alt=""
            />
            <div
              class="hidden xl:flex menu_item opacity-0 absolute top-0 left-0 w-full h-full bg-stone-950 bg-opacity-70 items-center justify-center transition-all duration-500"
            >
              <div class="text-white text-center">
                <h1 class="text-2xl font-semibold uppercase">
                  {{ item.name }}
                </h1>
                <div class="text-lg px-12 line-clamp-2">
                  {{ item.description }}
                </div>
                <div class="w-full flex justify-center">
                  <nuxt-link :to="item.link">
                    <button
                      class="bg-yellow-500 text-white px-6 py-2 mt-4 rounded-lg flex items-center justify-center"
                    >
                      <Icon
                        name="ic:baseline-arrow-forward-ios"
                        class="text-3xl font-bold text-black"
                      />
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <nuxt-link
              :to="item.link"
              class="absolute bottom-[10%] right-0 bg-stone-950 py-4 px-4 z-10 xl:hidden cursor-pointer"
            >
              <div class="w-full flex justify-center items-center gap-2">
                <span class="text-orange-300 text-2xl md:text-xl lg:text-2xl">
                  {{ item.name }}
                </span>

                <Icon
                  name="ic:baseline-arrow-forward-ios"
                  class="text-xl font-bold text-orange-300"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import image_cover1 from "../assets/images/food26.png";
import image_cover2 from "../assets/images/food20.png";
import image_cover3 from "../assets/images/food25.png";

const items = ref([
  {
    name: "Menu",
    link: "/menu",
    image: image_cover1,
    description:
      "Explore our diverse menu featuring a variety of delicious dishes",
  },
  {
    name: "Reservation",
    link: "/reservation",
    image: image_cover2,
    description: "Book a table and enjoy a delicious meal with your loved ones",
  },
  {
    name: "Our Restaurant",
    link: "/about",
    image: image_cover3,
    description: "Discover our restaurant and enjoy a unique dining experience",
  },
]);
</script>

<style lang="scss">
.menu_list {
  &:hover {
    img {
      transform: scale(1.1);
    }
    .menu_item {
      opacity: 1;
    }
  }
}
</style>
