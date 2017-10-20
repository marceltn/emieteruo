// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueScrollTo from 'vue-scrollto'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/js/jquery.min.js'
import './assets/js/jquery.scrollex.min.js'
import './assets/js/jquery.scrolly.min.js'
import './assets/js/util.js'
import './assets/js/main.js'

import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 350,
  easing: 'ease-out',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export const globalBus = new Vue({
  data: {
    appName: 'emieteruo'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
