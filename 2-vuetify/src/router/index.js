import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ErrorView from "../views/ErrorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "*",
    name: "error",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
