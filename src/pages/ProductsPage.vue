<template>
  <main>
    <section class="products">
      <div class="products__wrapper">
        <h1 class="products__title">Все товары</h1>
        <v-button @click="showDialog" class="comments__button">
          Добавить клиента
        </v-button>
        <ProductList :products="products" class="products__list" />
      </div>
    </section>
  </main>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue';
import { useProducts } from '@/hooks/useProducts';
export default {
  components: {
    ProductList,
  },
  setup() {
    const { products, isProductsLoading } = useProducts();
    return {
      products,
      isProductsLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
@use '@/assets/scss/function' as *;
@use '@/assets/scss/variables' as *;

.products {
  padding-bottom: 20px;
}
.products__wrapper {
  @include wrapper(block);
}
.products__title {
  @include title();
  margin-top: 2rem;
}
</style>
