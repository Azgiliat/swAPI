import Vue from 'vue';
import Vuex from 'vuex';
import scroll from './directives/scroll.js';
import style from './scss/style.scss';
import App from './components/App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headerHeight: document.querySelector('header').clientHeight,
    searchCharacters: [],
    searchNext: '',
    searchURLBase: 'https://swapi.co/api/people/?search=',
    currentSearchURL: '',
    search: false,
    lastInput: null,
    landingArray: [],
  },
  mutations: {
    addCharacter(state, character) {
      state.characters.push(character);
    },
    addSpecies(state, character) {
      character[0].realSpecie = character[1];
    },
    addFilm(state, data) {
      state.characters[data.id].filmsList.push(data.film);
    },
    toggleSearch(state, amount) {
      amount.flag ? state.search = true : state.search = false;
      state.currentSearchURL = state.searchURLBase + amount.searchTag;
      state.lastInput = amount.lastInput;
    },
    addSearchResults(state, amount) {
      state.characters = amount.results;
    },
    createLandingArray(state, amount) {
      state.landingArray = amount.landingArray;
    },
    updateNextPage(state, amount) {
      state.next = amount;
    },
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
    addSearchResults({commit, state}, amount) {
      commit('addSearchResults', amount);
    },
    updateNextPage({commit, state}, amount) {
      commit('updateNextPage', amount);
    },
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
