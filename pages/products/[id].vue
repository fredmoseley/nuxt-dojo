<script setup>
import { ref } from "vue";
const { id } = useRoute().params
</script>
<template>
  <div>
    Product details for: {{ id }}
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus atque dicta aut voluptates distinctio corporis quos, omnis, ipsa ratione tempora voluptate autem ipsum dolore deleniti facilis nobis aspernatur alias magni?</p>
  </div>
</template>

<style scoped></style>
