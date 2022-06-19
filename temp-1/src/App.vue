<template>
  <div id="app">
    <!--<div>{{ fullName }}</div>
    <div>{{ age }}</div>
    <br />
    <div>
      <button v-on:click="arttir">Arttir</button>
    </div>
    <div>
      <button @click="azalt">Azalt</button>
    </div>
    <br />
    <div>{{ counter }}</div>
    <hr />
    <div>
      <input type="text" :value="surname" v-bind:class="cls" />
    </div>
    <hr />
    <div>
      <label for="#username">Kullanici Adi</label>
      <input id="username" type="text" v-model="user.username" />
      <label for="#pass">Sifre</label>
      <input id="pass" type="text" v-model="user.password" />
      <label for="#confirm">confirm</label>
      <input id="confirm" type="text" v-model="user.confirmPassword" />
      <button :disabled="user.password !== user.confirmPassword">Gönder</button>
      <div v-if="user.password !== user.confirmPassword">
        sifreler uyumlu degil
      </div>
    </div>

    <hr />
    <div v-if="isMarried">Evliliginizde mutluluklar dileriz.</div>
    <div v-else>En güzel zamanlar.</div>
    <hr />
    <hr />
    gördügü kurslar
    <ul>
      <li v-for="(item, index) in courses" :key="index">{{ item }}</li>
    </ul>

    <hr />
    <a href="https://www.google.com" @keydown.space="linkeGit">google</a> -->
    <div><input type="text" v-model="soru" /></div>
    <div>{{ cevap }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Osman",
      surname: "Yilmaz",
      age: 32,
      isMarried: true,
      courses: ["vue", "js", "nodejs"],
      counter: 0,
      cls: "input_class",
      user: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      soru: "",
      cevap: "",
    };
  },
  watch: {
    soru(yeniDeger, eskiDeger) {
      if (yeniDeger.indexOf("?") > -1) {
        this.cevap = "Sorunuzu aldim, degerlendiriyorum..";
        return;
      }
      this.cevap = yeniDeger == "" ? "" : "Dinliyorum, buyrun....";
      console.log("Yenideger: ", yeniDeger);
      console.log("Eskideger: ", eskiDeger);
    },
  },
  methods: {
    arttir() {
      this.counter = this.counter + 1;
    },
    azalt() {
      this.counter--;
    },
    linkeGit() {
      console.log("link tiklandi");
    },
  },
  computed: {
    fullName() {
      return `${this.name} ${this.surname} - ${this.age}`;
    },
  },
  beforeCreate() {
    console.log("beforeCreated");
  },
  async created() {
    // backend isteklerimizi burada cekebiliriz.
    // this.users
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  updated() {
    // console.log("updated");
  },
};
</script>

<style></style>
