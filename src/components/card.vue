<template>
<transition name="card" appear>
  <section class="card cards__card" @click="openPopup">
    <h3 class="visually-hidden">Character info</h3>
    <div class="card__avatar" :style="{backgroundColor : color}">
      <span class="card__avatar-text">{{info.name[0]}}</span>
    </div>
    <p class="card__name">{{info.name}}</p>
    <p class="card__species">{{info.realSpecie}}</p>
    <popup v-if="popupActive" :id="id" @closePopup="closePopup" v-bind:color="color" />
  </section>
</transition>
</template>

<script>
import popup from './popup.vue';
export default {
  data() {
    return {
      popupActive: false,
    }
  },
  components: {
    popup,
  },
  computed: {
    info() {
      return this.$store.state.characters[this.id];
    },
    color() {
      return '#' + Math.round(Math.random() * 255)
        .toString(16) + Math.round(Math.random() * 255)
        .toString(16) + Math.round(Math.random() * 255)
        .toString(16);
    },
  },
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  methods: {
    closePopup() {
      this.popupActive = false;
    },
    openPopup() {
      this.popupActive = true;
    },
  },
  created() {
    fetch(this.info.species[0])
      .then((response) => {
        if(response.ok) return response.json();
        else throw (new Error(`Bad response for specie`))
      })
      .then((data) => {
        this.$set(this.info, `realSpecie`, ``);
        this.$store.dispatch(`addSpecies`, [this.info, data.name]);
        return data.name;
      })
      .catch((error) => console.error(error));
    this.$set(this.info, 'filmsList', []);
    for(let film of this.info.films) {
      fetch(film)
        .then((response) => {
          if(response.ok) return response.json();
          else throw (new Error('Bad response for films'));
        })
        .then((data) => {
          this.$store.dispatch('addFilm', {
            id: this.id,
            film: data.title
          });
        })
        .catch((error) => console.error(error));
    }
  },
}
</script>

<style lang="scss">
.card-enter {
    opacity: 0;
    transform: translateY(30px);
}
.card-enter-active {
    transition: all 1s;
}
.card {
    width: 100%;
    height: 200px;
    background: #1A1A1A;
    border-radius: 8px;
    padding-top: 33px;
    color: #ffffff;

    &:focus,
    &:hover {
        box-shadow: 0 10px 40px rgba(37, 136, 167, 0.38);
    }
}

.cards__card {
    margin-bottom: 24px;
}

.card__avatar {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background-color: #BB86FC;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;
}
.avatar-text,
.card__avatar-text {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
}

.card__name {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
}

.card__species {
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #808080;
}
</style>
