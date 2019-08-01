import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/index.js'
import Directive from '@/directive/index.js'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Directive)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
