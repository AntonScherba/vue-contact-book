import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/contact/:id",
    name: "contact",
    component: () => import("../views/ContactsInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/vue-contact-book/",
  routes,
});

export default router;
