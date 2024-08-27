/*
 * @Descripttion: 
 * @version: 
 * @Author: Agua Man
 * @Date: 2023-05-27 21:58:30
 * @LastEditors: Agua Man
 * @LastEditTime: 2023-05-29 00:23:36
 */
import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/Login.vue'
// import News from '../views/NewsBlog.vue'
import ContactUs from '../views/ContactUs.vue'
import department from '../views/hospital/department/index.vue'
import hospital from '../views/hospital/index.vue'
import ComingSoon from '../views/ComingSoon.vue'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      name: 'Home',
    },
  },
  {
    path: '/services',
    name: 'Services',
    // component: () => import('@/views/Services.vue'),
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: '',
    },
  },
  {
    path: '/doctors',
    name: 'Doctors',
    // component: () => import('@/views/Doctors.vue'),
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: '',
    },
  },
  {
    path: '/news',
    name: 'News',
    // component: () => import('@/views/NewsBlog.vue'),
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: '',
    },
  },
  {
    path: '/news/:id',
    name: 'News',
    // component: () => import('@/views/NewsDetail.vue'),
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: '',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs,
    meta: {
      name: '',
    },
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: '',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      name: '',
    },
  },
  {
    path: '/about',
    name: 'About',
    // component: AboutView,
    component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: 'About',
    },    
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    // component: () => import('@/views/NewsDetail.vue'),
    component: () => import('@/views/ComingSoon.vue'),

    meta: {
      name: '',
    },
  },
  // {
  //   path: '/hospital',
  //   name: 'hospital',
  //   component: hospital,
  //   meta: {
  //     name: 'About',
  //   },
  // },
  // {
  //   path: '/hospital/:department',
  //   name: 'department',
  //   component: department,
  //   meta: {
  //     name: 'About',
  //   },
  // }
  // ,{
  //   path: '/hospital/gastroenterology',
  //   name: 'gastroenterology',
  //   component: department,
  //   meta: {
  //     index: 2,
  //   },
  // },
]


const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // console.log("Create Router!!"),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
