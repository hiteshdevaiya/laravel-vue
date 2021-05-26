require('./bootstrap');

import Vue from 'vue';

Vue.component('mainapp',require('./components/mainapp.vue').default); 

import router from './router';


const app = new Vue({
  el:'#app',
  router
})