<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="loggedInUser.id" icon class="pr-16 ml-16" @click="logout">
        {{ loggedInUser.username }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick(path) {
      this.$router.push(path);
    },
    logout() {
      this.$store.commit("user/setLoggedInUser", {});
      window.localStorage.removeItem("token");
      this.$router.push("login");
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters["user/getLoggedInUser"];
    },
  },
};
</script>

<style></style>
