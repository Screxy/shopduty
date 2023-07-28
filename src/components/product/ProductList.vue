<template>
  <ul class="products-list">
    <ProductItem :product="product" v-for="product in products" :key="product.id"  class="products-list__item"/>
  </ul>
</template>

<script>
import ProductItem from '@/components/product/ProductItem.vue';
export default {
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
