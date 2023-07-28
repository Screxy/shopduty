<template>
  <main>
    <section class="users">
      <div class="users__wrapper">
        <h1 class="users__title">Все клиенты</h1>
        <UserList :users="users" class="users__list"/>
      </div>
    </section>
  </main>
</template>

<script>
import UserList from '@/components/user/UserList.vue';
import { useUsers } from '@/hooks/useUsers';
export default {
  components: {
    UserList,
  },
  setup() {
    const { users, isUsersLoading } = useUsers();
    return {
      users,
      isUsersLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixin' as *;
@use '@/assets/scss/function' as *;
@use '@/assets/scss/variables' as *;

.users {
  padding-bottom: 20px;
}
.users__wrapper {
  @include wrapper(block);
}
.users__title {
  @include title();
  margin-top: 2rem;
}
</style>
