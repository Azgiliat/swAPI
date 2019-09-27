<template>
<div v-scroll="onScrollHandler" class="container">
  <loader class="container__loader" v-if="!loaded" />
  <search v-if="loaded" />
  <section v-if="loaded" class="cards main__cards">
    <h2 class="visually-hidden">Characters cards</h2>
    <card v-for="character in $store.state.characters" :key="$store.state.characters.indexOf(character)" :data="character" :id="$store.state.characters.indexOf(character)" />
  </section>
</div>
</template>

<script>
import search from './search.vue';
import card from './card.vue';
import loader from './loader.vue';
export default {
  data() {
    return {
      loading: true,
      loaded: false,
      needData: true,
    }
  },
  components: {
    search,
    card,
    loader,
  },
  computed: {
    cardHeight() {
      return this.$el.querySelector(`.card`)
        .offsetHeight;
    },
    headerHeight() {
      return this.$store.state.headerHeight;
    },
  },
  methods: {
    onScrollHandler() {
      if((this.headerHeight + window.scrollY + this.cardHeight * 3 >= this.$el.clientHeight) && this.needData) {
        this.needData = false;
        this.loadMoreChars();
      }
    },
    loadMoreChars() {
      fetch(this.$store.state.next)
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw (new Error(`Bad response`))
          }
        })
        .then((data) => {
          for(let item of data.results) {
            this.$store.dispatch(`addCharacter`, item);
          }
          this.needData = true;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    let id;
    const URL = `https://swapi.co/api/people/`;
    fetch(URL)
      .then((response) => {
        if(response.ok) {
          return response.json();
        } else {
          throw (new Error(`Bad response`))
        }
      })
      .then((data) => {
        this.$set(this.$store.state, `characters`, data.results);
        this.$set(this.$store.state, `next`, data.next);
        this.$set(this.$store.state, `count`, data.count);
        this.loading = false;
      })
      .catch((error) => console.error(error));
    id = setInterval(() => {
      if(!this.loading) {
        this.loaded = true;
        clearInterval(id);
      }
    }, 2000);
  },
}
</script>

<style lang="scss">
.container {
    width: 100%;
    padding-left: 7.5%;
    padding-right: 7.5%;
}
.container__loader {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
