
import Vue from 'vue'
import App from './App'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from "axios";
axios.defaults.baseURL = `http://www.emsifa.com/api-wilayah-indonesia/api/`;

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
