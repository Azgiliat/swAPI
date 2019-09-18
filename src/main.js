import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import style from './scss/style.scss';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
});

new Vue({
  el: '#app',
  render: h => h(App),
});
