export const UserModule = {
  namespaced: true,
  state: {
    user: null,
  },
  //mutations are fuctions that effect the state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  // actions are functions that you can call throughout your application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
  modules: {},
};
