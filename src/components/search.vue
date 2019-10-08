<template>
<div class=" search main__search ">
  <input type="text" class="search__input" placeholder="Search by name" v-model="inputData" @input="startDebounce">
</div>
</template>

<script>
export default {
  data() {
    return {
      inputData: '',
    }
  },
  computed: {
    searchURL() {
      return this.$store.state.searchURL;
    }
  },
  watch: {
    searchURL() {
      this.$el.querySelector('input')
        .focus();
    }
  },
  methods: {
    startDebounce() {
      const store = this.$store;
      this.inputData !== '' ? store.commit('toggleSearch', {
        flag: true,
        searchTag: this.inputData,
        lastInput: Date.now(),
      }) : store.commit('toggleSearch', {
        flag: false,
        searchTag: '',
        lastInput: null,
      });
    },
  },
}
</script>

<style lang="scss">
.search__input {
    width: 100%;
    background-color: inherit;
    border: none;
    outline: none;
    color: #808080;

    &::placeholder {
        font-family: $main-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #808080;
    }
}
.search {
    padding-right: 20px;
    position: relative;
    padding-bottom: 7px;
    margin-bottom: 45px;
    &::before {
        @include pseudo-element;
        width: 20px;
        height: 20px;
        left: calc(100% - 20px);
        background-repeat: no-repeat;
        background-image: url("./../img/icons/search-icon.svg");
        z-index: 10;
    }

    &::after {
        @include pseudo-element;
        width: 100%;
        height: 2px;
        background-color: #808080;
        top: 100%;
    }
}
</style>
