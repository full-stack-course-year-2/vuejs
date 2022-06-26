<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>
        <v-row>
          <v-col>
            <v-btn @click="btnClick('/')">Home</v-btn>
          </v-col>
          <v-col>
            <v-btn @click="btnClick('/about')">About</v-btn>
          </v-col>
          <v-col>
            <v-btn to="/users">Users</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
  methods: {
    btnClick(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
};
</script>
