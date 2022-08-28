import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    selectedUser: "",

    loggedInUser: {},
  },

  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectedUser(state) {
      return state.selectedUser;
    },
    getLoggedInUser(state) {
      return state.loggedInUser;
    },
  },

  mutations: {
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
    setLoggedInUser(state, payload) {
      state.loggedInUser = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const serverResponse = await axios.post(
          "http://localhost:3000/users/login",
          payload
        );

        commit("setLoggedInUser", serverResponse.data.user);
        window.localStorage.setItem("token", serverResponse.data.user.token);
      } catch (error) {
        console.log(error);
      }
    },

    async getUsers({ commit }) {
      try {
        const accessToken = window.localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        };

        const serverResponse = await axios.get(
          "http://localhost:3000/users",
          config
        );

        commit("setUsers", serverResponse.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
