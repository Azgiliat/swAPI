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
    addSpecies(state, character) {
      character[0].realSpecie = character[1];
    },
  },
  actions: {
    addCharacter({
      commit,
      state
    }, character) {
      commit(`addCharacter`, state, character);
    },
    addSpecies({
      commit,
      state
    }, character) {
      commit(`addSpecies`, character);
    },
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
