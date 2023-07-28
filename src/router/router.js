import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import UsersPage from '@/pages/UsersPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import TransactionsPage from '@/pages/TransactionsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/About',
    component: About,
  },
  {
    path: '/UsersPage',
    component: UsersPage,
  },
  {
    path: '/ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/TransactionsPage',
    component: TransactionsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
