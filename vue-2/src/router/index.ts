import HomeView from '@/views/HomeView.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/click-outside-test',
    name: 'Directives for Clicking Outside',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClickOutsideTest.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
