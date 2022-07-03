<template>
  <div>
    <v-row>
      <v-col>
        <div>Secilen Kullanici: ...{{ selectedUser }}</div>
      </v-col>
    </v-row>

    <UserCard
      v-for="user in users"
      :key="user.id"
      v-bind:user-name="user.userName"
      :yasi="user.yasi"
      v-on:butona-basma-eventi="kullaniciDegistir"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard";

export default {
  components: {
    UserCard,
  },
  data() {
    return {};
  },
  methods: {
    kullaniciDegistir(isim) {
      this.$store.commit("setSelectedUser", isim);
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    selectedUser() {
      return this.$store.getters.getSelectedUser;
    },
  },
};
</script>

<style></style>
