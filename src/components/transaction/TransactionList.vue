<template>
  <ul class="transaction-list">
    <TransactionItem
      :transaction="transaction"
      v-for="transaction in transactions"
      :key="transaction.id"
      class="transaction-list__item"
    />
  </ul>
</template>

<script>
import TransactionItem from '@/components/transaction/TransactionItem.vue';

export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  components: { TransactionItem },
};
</script>

<style lang="scss" scoped></style>
