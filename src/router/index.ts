import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/experience/zhongyou',
      name: 'zhongyou-experience',
      component: () => import('@/views/ZhongyouExperienceView.vue'),
    },
    {
      path: '/experience/zy-info',
      redirect: '/experience/zhongyou',
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
