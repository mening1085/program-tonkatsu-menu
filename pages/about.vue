<template>
  <Transition name="fade">
    <div
      class="flex flex-wrap xl:flex-nowrap gap-6 xl:h-screen lg:h-full h-full lg:p-16 md:p-10 sm:p-6 p-6 relative"
    >
      <div class="xl:w-1/2 relative w-full xl:max-h-full overflow-hidden">
        <img
          src="../assets/images/banner2.png"
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
              About
            </div>
          </div>
        </div>
      </div>

      <div
        class="xl:w-1/2 w-full bg-gradient-to-r from-stone-950 to-stone-800 rounded-xl text-stone-400 h-full flex flex-col justify-between overflow-hidden gap-4 p-4"
      >
        <div
          class="flex flex-wrap md:flex-nowrap grid-cols-1 gap-4 h-[50%] overflow-hidden"
        >
          <div class="w-full md:w-1/2 border border-stone-500 p-6 rounded-xl">
            <div class="flex flex-col justify-between h-full">
              <div class="text-xl uppercase text-center">Program Tonkatsu</div>
              <div>
                Founded with a passion for culinary excellence, Qitchen's
                journey began in the heart of Prague. Over years, it evolved
                into a haven for Tonkatsu enthusiasts, celebrated for its artful
                mastery and devotion to redefining gastronomy.
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img
              src="../assets/images/banner2.png"
              class="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>

        <div
          class="flex md:flex-nowrap flex-wrap justify-between items-center gap-4 h-full md:h-[200px]"
        >
          <div
            class="md:w-1/3 w-full border border-stone-500 p-6 rounded-xl h-full flex flex-col justify-center"
          >
            <div class="text-xl uppercase text-center mb-3">atmosphere</div>
            <div class="flex justify-center">
              <ClientOnly>
                <star-rating
                  v-model:rating="atmosphereRating"
                  :animate="true"
                  read-only
                  :star-size="20"
                ></star-rating>
              </ClientOnly>
            </div>
          </div>
          <div
            class="md:w-1/3 w-full border border-stone-500 p-6 rounded-xl h-full flex flex-col justify-center"
          >
            <div class="text-xl uppercase text-center mb-3">Food</div>
            <div class="flex justify-center">
              <ClientOnly>
                <star-rating
                  v-model:rating="foodRating"
                  :animate="true"
                  read-only
                  :star-size="20"
                ></star-rating>
              </ClientOnly>
            </div>
          </div>
          <div
            class="md:w-1/3 w-full border border-stone-500 p-6 rounded-xl h-full flex flex-col justify-center"
          >
            <div class="text-xl uppercase text-center mb-3">Rating</div>
            <div class="flex justify-center">
              <ClientOnly>
                <star-rating
                  v-model:rating="rating"
                  :animate="true"
                  read-only
                  :star-size="20"
                ></star-rating>
              </ClientOnly>
            </div>
          </div>
        </div>

        <div
          class="flex flex-wrap md:flex-nowrap gap-4 h-[50%] overflow-hidden"
        >
          <div class="w-full md:w-1/2">
            <img
              src="../assets/images/banner2.png"
              class="h-full w-full object-cover rounded-xl"
              alt=""
            />
          </div>
          <div class="w-full md:w-1/2 border border-stone-500 p-6 rounded-xl">
            <div class="flex flex-col justify-between h-full">
              <div class="text-xl uppercase text-center">Our Story</div>
              <div>
                Founded with a passion for culinary excellence, Qitchen's
                journey began in the heart of Prague. Over years, it evolved
                into a haven for Tonkatsu enthusiasts, celebrated for its artful
                mastery and devotion to redefining gastronomy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import StarRating from "vue-star-rating";
const atmosphereRating = ref(4);
const foodRating = ref(5);
const rating = ref(5);
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
  background: #262629;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #202020;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #202020;
}

.input {
  @apply w-full bg-white bg-opacity-10 border border-neutral-500 text-stone-400 p-2 rounded-md focus:outline-none;
}
</style>
