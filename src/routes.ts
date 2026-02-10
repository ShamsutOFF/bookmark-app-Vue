import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import MainView from '@/views/MainView.vue';
import Test from '@/components/Test.vue';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: AuthView,
    },
    {
      path: '/main',
      component: MainView,
      children: [
        {
          path: '',
          component: Test,
          name: 'main',
        },
      ]
    },
  ],
  history: createWebHistory(),
});
