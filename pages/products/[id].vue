<script setup>
import { ref } from 'vue';
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
});
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`);
</script>
<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<style scoped></style>
