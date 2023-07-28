import { supabase } from '@/lib/supabase';
import { onMounted, ref } from 'vue';

export function useTransactions() {
  const transactions = ref([]);
  const isTransactionsLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: transaction, error } = await supabase
        .from('transaction')
        .select('*');
      if (error) {
        console.log('error', error);
        return;
      }
      if (transaction == null) {
        console.log('пустой');
        transactions.value = [];
        return;
      }
      transactions.value = transaction;
      console.log('Данные получены!', transaction);
    } catch (error) {
      console.log(error);
    } finally {
      isTransactionsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    transactions,
    isTransactionsLoading,
  };
}
