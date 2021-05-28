require('./bootstrap');

import Vue from 'vue';

Vue.component('mainapp',require('./components/mainapp.vue').default); 

import router from './router';
import common from './common';

Vue.mixin(common);


const app = new Vue({
  el:'#app',
  router
})