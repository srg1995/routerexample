import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import PostView from "@/views/PostView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
  },
  {
    path: "/contact",
    name: "contac",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },

  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog/:id",
    name: "post",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
