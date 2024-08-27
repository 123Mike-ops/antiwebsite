/*
 * @Descripttion: 
 * @version: 
 * @Author: Agua Man
 * @Date: 2023-05-27 21:58:30
 * @LastEditors: Agua Man
 * @LastEditTime: 2023-05-28 21:58:06
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/fa/css/fontawesome.min.css'
import './assets/css/fa/css/all.css'
import './assets/css/ico/icofont.min.css'
import './assets/css/main.css'
import './assets/css/bootstrap.css'
import 'animate.css';
import locale from 'element-ui/lib/locale/lang/en'
import MetaInfo from 'vue-meta-info'


Vue.use(MetaInfo)

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false

const imagePathserver = process.env.VUE_APP_SERVER_URL + '/images';
const redirectionBaseURL = 'https://www.silkroadhospitaladdis.com/appointment/#'

new Vue({
  provide: {
    imagePathserver: imagePathserver,
    redirectionBaseURL: redirectionBaseURL
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
