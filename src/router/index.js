import { createRouter, createWebHistory } from 'vue-router'
import GetDataMovie from '../views/GetDataMovie.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: { path: '/login' }
    },
    {
      path: '/transaksi',
      name: 'transaksi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TransaksiView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditView.vue')
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: () => import('../views/DeleteView.vue')
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/KeranjangView.vue')
    },
    {
      path: '/getdatamovie',
      name: 'getDataMovie',
      component: GetDataMovie
    },
    {
      path: '/tesmodal',
      name: 'ShowModal',
      component: () => import('../views/ShowModal.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
