<template>
<section class="popup card__popup">
  <div class="popup__avatar avatar">
    <span class="popup__avatar-text avatar-text">{{info.name[0]}}</span>
  </div>
  <p class="popup__name">{{info.name}}</p>
  <p class="popup__icon--birth popup__icon">Birth year</p>
  <p class="popup__birth">{{info.birth_year}}</p>
  <p class="popup__icon--species popup__icon">Spiecies</p>
  <p class="popup__species">{{info.realSpecie}}</p>
  <p class="popup__icon--gender popup__icon">Gender</p>
  <p class="popup__gender">{{info.gender}}</p>
  <p class="popup__icon--homeworld popup__icon">Homeworld</p>
  <p class="popup__homeworld">***</p>
  <p class="popup__icon--films popup__icon">Films</p>
  <div class="films popup__films">
    <ul>
    </ul>
  </div>
  <button @click.stop="closePopup" class="close-button popup__close-button" type="button"></button>
</section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    info() {
      return this.$store.state.characters[this.id];
    }
  },
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  methods: {
    closePopup(evt) {
      this.$emit(`closePopup`);
    },
  },
}
</script>

<style lang="scss">
.close-button {
    position: absolute;
    top: 22px;
    right: 7%;
    border: none;
    background-color: transparent;
    width: 12px;
    height: 12px;

    &::before {
        @include pseudo-element;
        width: 12px;
        height: 2px;
        background-color: #ffffff;
        transform: rotate(45deg);
    }

    &::after {
        @include pseudo-element;
        width: 12px;
        height: 2px;
        background-color: #ffffff;
        transform: rotate(-45deg);
    }
}
.popup {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px 50px repeat(5, 50px) auto;
    grid-auto-rows: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    padding-left: 7.5%;
    padding-top: 50px;
    background-color: #191919;
    font-family: $main-font;
    font-weight: 700;
}

.popup__avatar {
    margin: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #BB86FC;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;
}

.popup__icon {
    position: relative;
    padding-left: 35px;
    font-family: $main-font;
    color: #808080;
    font-weight: 400;

    &--birth {
        &::before {
            width: 18px;
            height: 20px;
            @include pseudo-element;
            background-image: url("./../img/icons/birth-year.svg");
            background-repeat: no-repeat;
        }
    }

    &--species {
        &::before {
            width: 18px;
            height: 20px;
            @include pseudo-element;
            background-image: url("./../img/icons/species.svg");
            background-repeat: no-repeat;
        }
    }

    &--gender {
        &::before {
            width: 20px;
            height: 20px;
            @include pseudo-element;
            background-image: url("./../img/icons/gender.svg");
            background-repeat: no-repeat;
        }
    }

    &--homeworld {
        &::before {
            width: 20px;
            height: 20px;
            @include pseudo-element;
            background-image: url("./../img/icons/homeworld.svg");
            background-repeat: no-repeat;
        }
    }

    &--films {
        &::before {
            width: 20px;
            height: 20px;
            @include pseudo-element;
            background-image: url("./../img/icons/films.svg");
            background-repeat: no-repeat;
        }
    }
}
</style>
