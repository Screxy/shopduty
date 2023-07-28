<template>
  <li class="item">
    <p class="item__text">{{ product.id }}</p>
    <p class="item__text">{{ product.name }}</p>
    <p class="item__text">{{ product.price }}</p>
  </li>
</template>

<script>
export default {
    props:{
        product:{
            required: true,
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
.item{
    display: flex;
    justify-content: space-between;
}
.item__text{
    font-size: 14px;
}
</style>
