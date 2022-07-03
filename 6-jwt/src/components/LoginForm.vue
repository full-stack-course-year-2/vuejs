<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <form>
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password"></v-text-field>

        <v-btn class="mr-4 mt-6 success" @click="login"> Login </v-btn>
        <v-btn class="mr-4 mt-6" @click="getUsers"> Get Users </v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
    getUsers() {
      this.$store.dispatch("getUsers");
    },
  },
};
</script>

<style></style>
