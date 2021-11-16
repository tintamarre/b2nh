import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";
import Event from "@/views/Event.vue";

Vue.use(VueRouter);

var base_title = "B2NH :: ";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to B2NH"
    },
  },
  {
    path: "/event/",
    name: "Search {{ needle }} ",
    component: Event,
    meta: {
      title: base_title + "Search"
    },
  },
 


];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
  routes,
});

export default router;
