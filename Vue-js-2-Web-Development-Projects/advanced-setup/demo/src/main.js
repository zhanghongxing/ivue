import 'babel-polyfill'
import Vue from 'vue'
import Test from './Test.vue'

new Vue({
  el: '#app',
  //render: h => h('div', 'hello world'),
  ...Test,
})
