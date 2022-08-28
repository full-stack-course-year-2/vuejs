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
    async login() {
      await this.$store.dispatch("user/login", {
        username: this.username,
        password: this.password,
      });

      const loggedInSuccesful = this.$store.state.user.loggedInUser.id;
      if (loggedInSuccesful) {
        await this.$store.dispatch("todo/fetchTodos", {
          userId: loggedInSuccesful,
        });

        this.$router.push("todo");
      }
    },
    getUsers() {
      this.$store.dispatch("user/getUsers");
    },
  },
};
</script>

<style></style>
