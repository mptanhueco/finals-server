import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import bootstrapvue from 'bootstrap-vue'
import vuerouter from 'vue-router'
import vueaxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.js')

Vue.config.productionTip = false
Vue.use(bootstrapvue)
Vue.use(vuerouter)
Vue.use(axios)
Vue.use(vueaxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
