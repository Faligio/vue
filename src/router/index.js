import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Import from '../views/Import.vue'
import Export from '../views/Export.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/import',
    name: 'Import',
    component: Import
  },
  {
    path: '/export',
    name: 'Export',
    component: Export
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
