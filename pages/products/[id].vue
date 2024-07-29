<script setup>
import { ref } from 'vue';
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
});
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`);
if (!product.value) {
    throw createError({statusCode: 404, statusMessage:'Product not found', fatal: true})
}

</script>
<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<style scoped></style>
