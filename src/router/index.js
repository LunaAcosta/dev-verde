import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Contact",
      component: ContactView,
    },
  ],
});

export default router;
