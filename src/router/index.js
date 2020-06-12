import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Actor from '../views/Actor.vue'
import Collection from '../views/Collection.vue'
import Genre from '../views/Genre.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:slug',
    name: 'Movie',
    component: Movie,
    props: true
  },
  {
    path: '/actor/:slug',
    name: 'Actor',
    component: Actor,
    props: true
  },
  {
    path: '/collection/:id',
    name: 'Collection',
    component: Collection,
    props: true
  },
  {
    path: '/genre/:slug',
    name: 'Genre',
    component: Genre,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
