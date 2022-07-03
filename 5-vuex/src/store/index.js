import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: "1", userName: "Osman", yasi: "25" },
      { id: "2", userName: "Mahmut", yasi: "40" },
      { id: "3", userName: "Murat", yasi: "18" },
    ],
    selectedUser: "",
  },

  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectedUser(state) {
      return state.selectedUser;
    },
  },

  mutations: {
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
  },

  actions: {},
});
