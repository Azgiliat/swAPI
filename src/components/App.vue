<template>
<div class="container">
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
    }
  },
  components: {
    search,
    card,
    loader,
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
    // setTimeout(() => {
    //   fetch(URL)
    //     .then((response) => {
    //       if(response.ok) {
    //         return response.json();
    //       } else {
    //         throw (new Error(`Bad response`))
    //       }
    //     })
    //     .then((data) => {
    //       for(let item of data.results) {
    //         this.$store.commit(`addCharacter`, item);
    //       }
    //       console.log(data);
    //     })
    //     .catch((error) => console.error(error))
    // }, 5000);
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
