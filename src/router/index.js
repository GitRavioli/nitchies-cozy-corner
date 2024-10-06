import { createRouter, createWebHistory } from "vue-router";
import InitialView from "@/views/InitialView.vue";
import GameReview from "@/views/GameReview.vue"; // Review Page for individual games
import GameCorner from "@/views/GameCorner.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

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
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
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
