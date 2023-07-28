<template>
  <ul class="users-list">
    <UserItem
      :user="user"
      v-for="user in users"
      :key="user.id"
      class="users-list__item"
    />
  </ul>
</template>

<script>
import UserItem from '@/components/user/UserItem.vue';
export default {
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
