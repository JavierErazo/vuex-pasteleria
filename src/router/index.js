import { createRouter, createWebHashHistory } from 'vue-router'
import Pasteles from '../views/Pasteles.vue'
import Adornos from '../views/Adornos.vue'
import Ordenar from '../views/Ordenar.vue'
import Pedidos from '../views/Pedidos.vue'
import SaboresRestantes from '../views/SaboresRestantes.vue';
import AdornosRestantes from '../views/AdornosRestantes.vue';
const routes = [
  {
    path: '/pasteles',
    name: 'pasteles',
    component: Pasteles
  },
  {
    path: '/adornos',
    name: 'adornos',
    component: Adornos
  },
  {
    path: '/ordenar',
    name: 'ordenar',
    component: Ordenar
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/saboresRestantes',
    name: 'saboresRestantes',
    component: SaboresRestantes
  },
  {
    path: '/adornosRestantes',
    name: 'adornosRestantes',
    component: AdornosRestantes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
