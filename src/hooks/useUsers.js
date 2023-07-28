import { supabase } from '@/lib/supabase';
import { onMounted, ref } from 'vue';

function useUsers() {
  const users = ref([]);
  const isUsersLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: user, error } = await supabase
        .from('user')
        .select('*');
      if (error) {
        console.log('error', error);
        return;
      }
      if (user === null) {
        console.log('пустой');
        users.value = [];
        return;
      }
      users.value = user;
      console.log('Данные получены!', user);
    } catch (error) {
      console.log(error);
    } finally {
      isUsersLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    users,
    isUsersLoading,
  };
}
function useUsersById(id) {
  const user = ref({});
  const isUserLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: userData, error } = await supabase
        .from('user')
        .select('*')
        .eq('id', id);
      if (error) {
        console.log('error', error);
        return;
      }
      if (userData === null) {
        console.log('пустой');
        user.value = [];
        return;
      }
      user.value = userData[0];
      console.log('Данные получены!', userData);
    } catch (error) {
      console.log(error);
    } finally {
      isUserLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    user,
    isUserLoading,
  };
}

export {useUsers, useUsersById}