<template>
  <li class="item">
    <p class="item__text">{{ transaction.id }}</p>
    <p class="item__text">{{ user.name }}</p>
    <p class="item__text">{{ date }}</p>
    <p class="item__text">{{ product.name }}</p>
    <p class="item__text">{{ dueDate }}</p>
    <p class="item__text">{{ isPaid }}</p>
  </li>
</template>

<script>
import { toRefs, computed } from 'vue';
import { useUsersById } from '@/hooks/useUsers';
import { useProductsById } from '@/hooks/useProducts';
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { transaction } = toRefs(props);
    const {user} = useUsersById(transaction.value.user)
    const {product} = useProductsById(transaction.value.product)
    const date = computed(() => {
      return new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(Date.parse(transaction.value.date));
    });
    const dueDate = computed(() => {
      return new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }).format(Date.parse(transaction.value.dueDate));
    });
    const isPaid = computed(() => {
      if (transaction.value.paid === true) return 'Оплачено'
      return 'Не оплачено'
    });
    return {
      date,
      dueDate,
      isPaid,
      user,
      product
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
}
.item__text {
  font-size: 14px;
}
</style>
