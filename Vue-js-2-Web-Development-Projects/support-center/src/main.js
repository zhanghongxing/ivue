import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'

new Vue({
  el: '#app',
  //render: h => h('div', 'Support center'),
  render: h => h(AppLayout),
  // Provide the router to the app
  router,
})
