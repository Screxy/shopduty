<template>
  <main>
    <section class="transactions">
      <div class="transactions__wrapper">
        <h1 class="transactions__title">Все операции</h1>
        <TransactionList :transactions="transactions" class="transactions__list"/>
      </div>
    </section>
  </main>
</template>

<script>
import TransactionList from '@/components/transaction/TransactionList.vue';
import { useTransactions } from '@/hooks/useTransactions';
export default {
  components: {
    TransactionList,
  },
  setup() {
    const { transactions, isTransactionsLoading } = useTransactions();
    return {
      transactions,
      isTransactionsLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
@use '@/assets/scss/function' as *;
@use '@/assets/scss/variables' as *;

.transactions {
  padding-bottom: 20px;
}
.transactions__wrapper {
  @include wrapper(block);
}
.transactions__title {
  @include title();
  margin-top: 2rem;
}
</style>
