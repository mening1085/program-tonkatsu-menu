<template>
  <div class="menu">
    <div class="menu_list">
      <div
        v-for="item in items"
        :key="item.name"
        class="menu_item"
        @click="onClick(item.name)"
      >
        <img :src="item.image" alt="menu" />
        <div class="menu_item_content">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    name: "Menu",
    link: "/menu",
    image: require("../assets/images/food26.png"),
    description:
      "Explore our diverse menu featuring a variety of delicious dishes",
  },
  {
    name: "Reservation",
    link: "/reservation",
    image: require("../assets/images/food20.png"),
    description: "Book a table and enjoy a delicious meal with your loved ones",
  },
  {
    name: "Our Restaurant",
    link: "/restaurant",
    image: require("../assets/images/food25.png"),
    description: "Discover our restaurant and enjoy a unique dining experience",
  },
]);
</script>

<style></style>
