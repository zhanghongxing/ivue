import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'

new Vue({
  el: '#app',
  //render: h => h('div', 'Support center'),
  render: h => h(AppLayout),
})
