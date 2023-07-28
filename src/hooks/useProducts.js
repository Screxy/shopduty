import { supabase } from '@/lib/supabase';
import { onMounted, ref } from 'vue';

function useProducts() {
  const products = ref([]);
  const isProductsLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: product, error } = await supabase
        .from('product')
        .select('*');
      if (error) {
        console.log('error', error);
        return;
      }
      if (product === null) {
        console.log('пустой');
        products.value = [];
        return;
      }
      products.value = product;
      console.log('Данные получены!', product);
    } catch (error) {
      console.log(error);
    } finally {
      isProductsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    products,
    isProductsLoading,
  };
}

function useProductsById(id) {
  const product = ref({});
  const isProductsLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: productData, error } = await supabase
        .from('product')
        .select('*')
        .eq('id',id);
      if (error) {
        console.log('error', error);
        return;
      }
      if (product === null) {
        console.log('пустой');
        product.value = {};
        return;
      }
      product.value = productData[0];
      console.log('Данные получены!', productData);
    } catch (error) {
      console.log(error);
    } finally {
      isProductsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    product,
    isProductsLoading,
  };
}
export {useProducts, useProductsById}