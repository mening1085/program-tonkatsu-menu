<template>
  <Transition name="fade">
    <div
      class="flex flex-wrap xl:flex-nowrap gap-6 xl:h-screen lg:h-full h-full lg:p-16 md:p-10 sm:p-6 p-6 relative"
    >
      <div class="xl:w-1/2 relative w-full xl:max-h-full overflow-hidden">
        <img
          src="../assets/images/food2.png"
          class="h-full w-full object-cover rounded-xl"
          alt=""
        />

        <div
          class="absolute bottom-[10%] left-0 bg-black py-3 md:py-6 px-6 md:px-16 z-10"
        >
          <div class="text-white">
            <div
              class="text-[40px] md:text-[60px] lg:text-[100px] uppercase text-stone-400 khand"
            >
              Menu
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:w-1/2 w-full bg-gradient-to-r from-stone-950 to-stone-800 rounded-xl p-6"
      >
        <div class="flex justify-center items-center gap-3">
          <nuxt-link
            to="#Tonkatsu"
            class="px-2 py-1 border border-gray-500 hover:bg-stone-900 rounded-lg uppercase text-stone-400"
          >
            Tonkatsu
          </nuxt-link>
          <nuxt-link
            to="#Curry"
            class="px-2 py-1 border border-gray-500 hover:bg-stone-900 rounded-lg uppercase text-stone-400"
          >
            curry
          </nuxt-link>
          <nuxt-link
            to="#Beef"
            class="px-2 py-1 border border-gray-500 hover:bg-stone-900 rounded-lg uppercase text-stone-400"
          >
            Beef
          </nuxt-link>
          <nuxt-link
            to="#Special"
            class="px-2 py-1 border border-gray-500 hover:bg-stone-900 rounded-lg uppercase text-stone-400"
          >
            Special
          </nuxt-link>
        </div>

        <div class="mt-12">
          <div class="menu__items xl:px-16 lg:px-8 md:px-6 sm:px-4 px-0">
            <div v-for="(menu, i) in menus" :key="i" class="mb-10">
              <div
                :id="menu.name"
                class="text-3xl tracking-wider font-medium text-center uppercase text-stone-400"
              >
                {{ menu.name }}
              </div>
              <div v-for="(item, j) in menu.items" :key="j" class="w-full mb-4">
                <div class="flex items-center justify-center">
                  <img
                    :src="item.image"
                    class="w-1/4 h-[100px] object-cover rounded-lg"
                    alt=""
                  />
                  <div class="w-3/4 p-4 text-stone-400">
                    <div
                      class="text-xl uppercase flex justify-between items-center"
                    >
                      <div>{{ item.name }}</div>
                      <div class="text-xl mt-2">{{ item.price }}฿</div>
                    </div>
                    <div class="line-clamp-3 text-sm">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import Tonkatsu1 from "../assets/images/food1.png";
import Tonkatsu2 from "../assets/images/food2.png";
import Tonkatsu3 from "../assets/images/food3.png";
import Tonkatsu4 from "../assets/images/food4.png";
import Tonkatsu5 from "../assets/images/food5.png";
import Tonkatsu6 from "../assets/images/food6.png";
import Tonkatsu7 from "../assets/images/food7.png";
import Tonkatsu8 from "../assets/images/food8.png";
import Tonkatsu9 from "../assets/images/food9.png";
import Tonkatsu10 from "../assets/images/food10.png";
import Tonkatsu11 from "../assets/images/food11.png";
import Tonkatsu12 from "../assets/images/food12.png";
import Tonkatsu13 from "../assets/images/food13.png";
import Tonkatsu14 from "../assets/images/food14.png";
import Tonkatsu15 from "../assets/images/food15.png";
import curry1 from "../assets/images/food16.png";
import curry2 from "../assets/images/food17.png";
import curry3 from "../assets/images/food18.png";
import curry4 from "../assets/images/food19.png";
import curry5 from "../assets/images/food20.png";
import curry6 from "../assets/images/food21.png";
import curry7 from "../assets/images/food22.png";
import beef1 from "../assets/images/food23.png";
import beef2 from "../assets/images/food24.png";
import beef3 from "../assets/images/food25.png";
import special1 from "../assets/images/food26.png";
import special2 from "../assets/images/food27.png";
import special3 from "../assets/images/food28.png";
import special4 from "../assets/images/food29.png";

const menus = ref([
  {
    name: "Tonkatsu",
    items: [
      {
        name: "Tonkatsu Special",
        image: Tonkatsu1,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "A delicious Tonkatsu dish with a unique blend of spices and flavors.",
      },
      {
        name: "Tonkatsu Deluxe",
        image: Tonkatsu3,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Experience the premium taste of our Tonkatsu Deluxe, made with the finest ingredients.",
      },
      {
        name: "Tonkatsu Classic",
        image: Tonkatsu4,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Our classic Tonkatsu, a timeless favorite with a perfect balance of taste.",
      },
      {
        name: "Tonkatsu Supreme",
        image: Tonkatsu5,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Indulge in the supreme version of Tonkatsu, rich in flavor and texture.",
      },
      {
        name: "Tonkatsu Delight",
        image: Tonkatsu6,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "A delightful Tonkatsu dish that will leave you craving for more.",
      },
      {
        name: "Tonkatsu Fusion",
        image: Tonkatsu7,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "A fusion of traditional and modern flavors in our Tonkatsu Fusion.",
      },
      {
        name: "Tonkatsu Gourmet",
        image: Tonkatsu8,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Gourmet Tonkatsu, crafted with the highest quality ingredients for a luxurious taste.",
      },
      {
        name: "Tonkatsu Fiesta",
        image: Tonkatsu9,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "A festive Tonkatsu dish that brings joy to your taste buds.",
      },
      {
        name: "Tonkatsu Premium",
        image: Tonkatsu10,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Premium Tonkatsu, offering an exquisite dining experience.",
      },
      {
        name: "Tonkatsu Extravaganza",
        image: Tonkatsu11,
        price: Math.floor(Math.random() * 401) + 100,
        description: "An extravagant Tonkatsu dish that is sure to impress.",
      },
      {
        name: "Tonkatsu Ultimate",
        image: Tonkatsu14,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "The ultimate Tonkatsu experience, packed with flavor and satisfaction.",
      },
      {
        name: "Tonkatsu Heaven",
        image: Tonkatsu15,
        price: Math.floor(Math.random() * 401) + 100,
        description:
          "Heavenly Tonkatsu, a dish that transcends ordinary taste.",
      },
    ],
  },
  {
    name: "Curry",
    items: [
      {
        name: "Curry Delight",
        image: curry1,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A delightful curry dish with a perfect blend of spices.",
      },
      {
        name: "Curry Supreme",
        image: curry2,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Supreme curry, rich in flavor and aroma.",
      },
      {
        name: "Curry Classic",
        image: curry3,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Classic curry, a timeless favorite.",
      },
      {
        name: "Curry Fusion",
        image: curry4,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A fusion of traditional and modern curry flavors.",
      },
      {
        name: "Curry Gourmet",
        image: curry5,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Gourmet curry, crafted with the finest ingredients.",
      },
      {
        name: "Curry Fiesta",
        image: curry6,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A festive curry dish that brings joy to your taste buds.",
      },
      {
        name: "Curry Premium",
        image: curry7,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Premium curry, offering an exquisite dining experience.",
      },
    ],
  },
  {
    name: "Beef",
    items: [
      {
        name: "Beef Delight",
        image: beef1,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A delightful beef dish with a perfect blend of spices.",
      },
      {
        name: "Beef Supreme",
        image: beef2,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Supreme beef, rich in flavor and aroma.",
      },
      {
        name: "Beef Classic",
        image: beef3,
        price: Math.floor(Math.random() * 401) + 100,
        description: "Classic beef, a timeless favorite.",
      },
    ],
  },
  {
    name: "Special",
    items: [
      {
        name: "Special Dish 1",
        image: special1,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A special dish with a unique blend of flavors.",
      },
      {
        name: "Special Dish 2",
        image: special2,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A delightful dish that will leave you craving for more.",
      },
      {
        name: "Special Dish 3",
        image: special3,
        price: Math.floor(Math.random() * 401) + 100,
        description: "A fusion of traditional and modern flavors.",
      },
      {
        name: "Special Dish 4",
        image: special4,
        price: Math.floor(Math.random() * 401) + 100,
        description: "An extravagant dish that is sure to impress.",
      },
    ],
  },
]);
</script>

<style lang="scss">
.menu__items {
  height: calc(100vh - 234px);
  overflow: auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #282423;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #33302f;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #33302f;
}
</style>
