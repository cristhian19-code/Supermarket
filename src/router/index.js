import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import('../views/Categorias.vue')
  },
  {
    path: '/sesion',
    name: 'IniciarSesion',
    component: () => import('../views/Sesion.vue')
  },
  {
    path: '/cetegoria/:category',
    name: 'Categoria',
    component: () => import('../views/Categoria.vue')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import('../views/Contactanos.vue')
  },
  {
    path: '/producto/:id',
    name: 'Producto',
    component: () => import('../views/Producto.vue')
  },
  {
    path: '/categoria/:category',
    name: 'CategoriaID',
    component: () => import('../views/Categoria.vue') 
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/Carrito.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
