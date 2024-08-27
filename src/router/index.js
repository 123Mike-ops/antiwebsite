
import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUs from '../views/ContactUs.vue'


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
    path: '/contact',
    name: 'Contact',
    component: ContactUs,
    meta: {
      name: '',
    },
  },
  {
    path: '/services',
    name: 'ServiceArea',

    component: () => import('@/views/ServiceAreaView.vue'),
    meta: {
      name: 'Service',
    },
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',

    component: () => import('@/views/PortfolioView.vue'),
    meta: {
      name: 'Portfolio',
    },
  },
   {
    path: '/detail/:serId',
    name: 'Detail',

    component: () => import('@/views/DetailView.vue'),
    meta: {
      name: 'Detail',
    },
  },
  {
    path: '/detailProject/:projectId',
    name: 'ProjectDetail',

    component: () => import('@/views/ProjectDetail.vue'),
    meta: {
      name: 'ProjectDetail',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    // component: () => import('@/views/ComingSoon.vue'),
    meta: {
      name: 'About',
    },
  },

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
