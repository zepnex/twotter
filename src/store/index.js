import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  //mutations are fuctions that effect the state
  mutations: {},
  // actions are functions that you can call throughout your application that call mutations
  actions: {},
  modules: {
    User: UserModule,
  },
});
