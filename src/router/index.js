import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import { users } from "../assets/user";
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;
  if (!user) {
    await store.dispatch("User/setUser", users[0]);
  }
  const isAdmin = true;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});

export default router;
