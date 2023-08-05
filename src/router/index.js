import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import UgbVerdeView from "../views/UgbVerdeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/ugbverde",
      name: "ugbverde",
      component: UgbVerdeView,
    },
  ],
});

export default router;
