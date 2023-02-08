import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
import about from "./components/about.vue";
import vishal from "./components/vishal.vue";
import sanjay from "./components/sanjay.vue";
import jash from "./components/jash.vue";
import saakshi from "./components/saakshi.vue";
import calculator from "./components/calculator.vue";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/about",
    component: about,
    children: [
      {
        path: "/about/vishal",
        component: vishal,
      },
      {
        path: "/about/sanjay",
        component: sanjay,
      },
      {
        path: "/about/jash",
        component: jash,
      },
      {
        path: "/about/saakshi",
        component: saakshi,
      },
    ],
  },
  {
    path: "/calculator",
    component: calculator,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
