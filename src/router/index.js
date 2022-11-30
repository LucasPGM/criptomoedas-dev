import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Historic from '../views/Historic.vue'
import Cryptos from '../views/Cryptos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historic',
    name: 'Historic',
    component: Historic
  },
  {
    path: '/cryptos',
    name: 'Cryptos',
    component: Cryptos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
