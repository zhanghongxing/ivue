import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch'

Vue.use(VueFetch)

new Vue({
  el: '#app',
  //render: h => h('div', 'Support center'),
  render: h => h(AppLayout),
  // Provide the router to the app
  router,
})
