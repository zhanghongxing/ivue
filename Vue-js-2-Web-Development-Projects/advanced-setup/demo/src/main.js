import 'babel-polyfill'
import Vue from 'vue'
//import Test from './Test.vue'
import Movies from './Movies.vue'

new Vue({
  el: '#app',
  //render: h => h('div', 'hello world'),
  //...Test,
  ...Movies,
})
