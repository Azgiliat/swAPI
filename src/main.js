import Vue from 'vue';
import Vuex from 'vuex';
import style from './scss/style.scss';
import App from './components/App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showedCounter: 0,
  },
  mutations: {
    showedCounterIncrement(state) {
      state.showedCounter++;
    },
    addCharacter(state, character) {
      state.characters.push(character);
    },
  },
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
