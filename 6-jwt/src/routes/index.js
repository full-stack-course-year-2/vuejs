import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ErrorView from "../views/ErrorView";
import UsersView from "../views/UsersView";
import LoginView from "../views/LoginView";
import TodoView from "../views/TodoView";

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
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoView,
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
