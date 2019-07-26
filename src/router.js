import Vue from "vue";
import Router from "vue-router";
import Home from "./Home.vue";
import QrView from "./QrView.vue";
import QrReader from "./QrReader.vue";

Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/qrView",
      name: "qrView",
      component: QrView
    },
    {
      path: "/qrReader",
      name: "qrReader",
      component: QrReader
    }
  ]
});
