<template>
  <div class="user-profile">
    <div class="user-profile_sidebar">
      <div class="user-profile_user-panel">
        <h1 class="user-profile_username">@{{ state.user.username }}</h1>
        <div class="user-profile_admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile_follower-count">
          <strong>Follower: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile_twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel.vue";
import { users } from "../assets/user";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    });
    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }

    return {
      state,
      addTwoot,
      userId,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: calc(100% -100px);
  padding: 50px 5%;

  .user-profile_user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile_admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile_create-twoot {
      border-top: 1px solid #dfe3e8;
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: red;
        border-color: red;
        border-top: 1px solid #dfe3e8;

        button {
          background-color: red;
          border: none;
          color: white;
        }
      }

      .user-profile_create-twoot-type {
        margin-top: 5px;
      }

      #sendTwoot {
        margin-top: 5px;
      }
    }
  }
  .user-profile_twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
    margin-left: 40px;
    width: 85%;
  }
}
</style>
