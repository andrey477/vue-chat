import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import RoomPage from "@/views/RoomPage/RoomPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/room",
    component: RoomPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
