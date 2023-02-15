import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
import about from "./components/about.vue";
import vishal from "./components/vishal.vue";
import sanjay from "./components/sanjay.vue";
import jash from "./components/jash.vue";
import saakshi from "./components/saakshi.vue";
import calculator from "./components/calculator.vue";
import global_registration from "./components/global_registration.vue";
import store_test_component from "./components/store_test_component.vue";
import ComponentComposition from "./components/ComponentComposition.vue";

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
  {
    path: "/global_registration",
    component: global_registration,
  },
  {
    path: "/store",
    component: store_test_component,
  },
  {
    path: "/composition",
    component: ComponentComposition,
  },
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
