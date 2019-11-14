import Vue from 'vue';
import Vuex from 'vuex';
import VueWordpress from '@/vue-wordpress';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueWordpress);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  wordpressSettings: new VueWordpress(),
  render: createElement => createElement(App)
});
