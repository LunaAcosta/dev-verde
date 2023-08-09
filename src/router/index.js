import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import UgbVerdeView from "../views/UgbVerdeView.vue";
import DirectorioView from "../views/DirectorioView.vue";

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
    {
      path: "/Directorio",
      name: "directorio",
      component: DirectorioView,
    },
  ],
});

export default router;
