<template>
  <li class="item">
    <p class="item__text">{{ user.id }}</p>
    <p class="item__text">{{ user.name }}</p>
    <p class="item__text">{{ user.surname }}</p>
    <p class="item__text">{{ user.phone }}</p>
  </li>
</template>

<script>
export default {
    props:{
        user:{
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
