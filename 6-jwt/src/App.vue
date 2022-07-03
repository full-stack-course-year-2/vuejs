<template>
  <v-app>
    <NewNavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NewNavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NewNavBar,
  },

  data() {
    return {};
  },
};
</script>
