<template>
<div class="container">
  <loader />
  <search />
  <section class="cards main__cards">
    <h2 class="visually-hidden">Characters cards</h2>
    <card v-for="character in $store.state.characters" :key="$store.state.characters.indexOf(character)" />
  </section>
</div>
</template>

<script>
import search from './search.vue';
import card from './card.vue';
import loader from './loader.vue';
export default {
  data() {
    return {}
  },
  components: {
    search,
    card,
    loader,
  },
  created() {
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
        console.log(data);
      })
      .catch((error) => console.error(error));
    setTimeout(() => {
      fetch(URL)
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw (new Error(`Bad response`))
          }
        })
        .then((data) => {
          for(let item of data.results) {
            this.$store.commit(`addCharacter`, item);
          }
          console.log(data);
        })
        .catch((error) => console.error(error))
    }, 5000);
  },
}
</script>

<style lang="scss">
</style>
