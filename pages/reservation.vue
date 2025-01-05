<template>
  <Transition name="fade">
    <div
      class="flex flex-wrap xl:flex-nowrap gap-6 xl:h-screen lg:h-full h-full lg:p-16 md:p-10 sm:p-6 p-6 relative"
    >
      <div class="xl:w-1/2 relative w-full xl:max-h-full overflow-hidden">
        <img
          src="../assets/images/banner1.png"
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
              Reservation
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:w-1/2 w-full bg-gradient-to-r from-stone-950 to-stone-800 rounded-xl p-6 text-stone-400"
      >
        <div class="text-center text-2xl uppercase leading-wider">
          Reservation
        </div>
        <div class="flex justify-center">
          <div class="w-3/4 text-center mt-6">
            Secure your spot at Program Tonkatsu, where exceptional Tonkatsu and
            a remarkable dining experience await.
          </div>
        </div>

        <form @submit="submitForm" class="mt-16">
          <div class="flex flex-wrap mt-6">
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="name" class="block text-md">Name</label>
              <input type="text" id="name" name="name" class="input" required />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="email" class="block text-md">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="input"
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="phone" class="block text-md">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="input"
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="date" class="block text-md">Date</label>
              <input type="date" id="date" name="date" class="input" required />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="time" class="block text-md">Time</label>
              <input type="time" id="time" name="time" class="input" required />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
              <label for="guests" class="block text-md">Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                class="input"
                required
                placeholder="1-10"
              />
            </div>
            <div class="w-full px-2 mb-4">
              <label for="message" class="block text-md">Message</label>
              <textarea id="message" name="message" class="input"></textarea>
            </div>
            <div class="w-full px-2 mb-4">
              <button
                type="submit"
                class="w-full bg-neutral-300 text-zinc-900 p-2 rounded-md uppercase"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup></script>

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
