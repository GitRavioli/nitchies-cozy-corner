import { createRouter, createWebHistory } from "vue-router";
import InitialView from "@/views/InitialView.vue";
import GameReview from "@/views/GameReview.vue"; // Review Page for individual games
import GameCorner from "@/views/GameCorner.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "initial",
      component: InitialView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/game-corner",
      name: "gameCorner",
      component: GameCorner,
    },
    {
      path: "/game-review",
      name: "GameReview",
      component: GameReview,
    },
  ],
});

export default router;
