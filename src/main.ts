import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'nprogress/nprogress.css'
import '@/assets/css/style.css';
import NProgress from 'nprogress'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
