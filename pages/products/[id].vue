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
        Product details for: {{ id }}
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<style scoped></style>
