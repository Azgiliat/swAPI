<template>
<section class="card cards__card">
  <h3 class="visually-hidden">Character info</h3>
  <div class="card__avatar">
    <span class="card__avatar-text">{{avatar}}</span>
  </div>
  <p class="card__name">{{name}}</p>
  <p class="card__species">{{species}}</p>
</section>
</template>

<script>
export default {
  data() {
    return {
      avatar: `X`,
      name: `Name`,
      species: `species`,
    }
  }
}
</script>

<style lang="scss">
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
