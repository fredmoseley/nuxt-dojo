<script setup>
import { ref } from "vue";
  definePageMeta({
    layout: 'products'
  })
  
</script>
<template>
  <div>
    <div class="grid grid-cols-4 gap-5"></div>
    <div v-for="p in products" >
      <nuxt-link to="`/products/${p.id}`"> {{ p.title }}</nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
