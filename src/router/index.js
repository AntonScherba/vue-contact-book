import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/vue-contact-book",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/contact/:id",
    name: "contact",
    component: () => import("../views/ContactInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
