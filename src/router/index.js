import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import(/* webpackChunkName: "item" */ '../views/Item.vue'),
    props: true
  },
  {
    path: '/newItem',
    name: 'NewItem',
    component: () => import(/* webpackChunkName: "nuevoItem" */ '../views/CreateItem.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
