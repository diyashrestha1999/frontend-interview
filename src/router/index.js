import { createRouter, createWebHistory } from 'vue-router'
import ContactView from "@/views/ContactView.vue";
import SubscribeView from "@/views/SubscribeView.vue";

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: SubscribeView

  }
]

const router = createRouter({
  history: createWebHistory('#'),
  mode:'history',
  routes
})

export default router
