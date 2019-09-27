import Vue from 'vue';
import Vuex from 'vuex';
import scroll from './directives/scroll.js';
import style from './scss/style.scss';
import App from './components/App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headerHeight: document.querySelector('header').clientHeight,
  },
  mutations: {
    showedCounterIncrement(state) {
      state.showedCounter++;
    },
    addCharacter(state, character) {
      state.characters.push(character);
    },
    addSpecies(state, character) {
      character[0].realSpecie = character[1];
    },
    addFilm(state, data) {
      state.characters[data.id].filmsList.push(data.film);
    }
  },
  actions: {
    addCharacter({
      commit,
      state
    }, character) {
      commit(`addCharacter`, character);
    },
    addSpecies({
      commit,
      state
    }, character) {
      commit(`addSpecies`, character);
    },
    addFilm({
      commit,
      state
    }, data) {
      commit('addFilm', data);
    },
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
