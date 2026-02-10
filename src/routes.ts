import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/AuthView.vue';
import MainView from '@/views/MainView.vue';
import Test from '@/components/Test.vue';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
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
