<template>
  <div class="home">
    <h1>home</h1>
    <div class="user-list">
      <router-link
        v-for="user in users"
        :key="user.id"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/user";
export default {
  name: "Home",

  setup() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}
.user-list {
  display: flex;
  flex-direction: column;
}
</style>
