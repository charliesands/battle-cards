<template>
  <div class="player container-fluid">
    <div class="row">
      <div class="col align-text-center">
        <h1>
          {{player.name}}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2 " v-for="card in player.hand" @click="setPlayerCard(card)" :class="{active: card == playerCard}">
        <img :src="card.img" id="imageId">
        <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "player",
    // props: {
    //   fnclick: {
    //     type: Function,
    //     required: true
    //   }
    // },
    computed: {
      player() {
        return this.$store.state.gameObject.players[0];
      },
      playerCard() {
        return this.$store.state.playerCard
      }
    },
    methods: {
      // border(el) {
      //   el.style.border = "1px solid blue"
      // }
      setPlayerCard(card) {
        this.$store.dispatch('setPlayerCard', card)
      }
    }
  }
</script>

<style>
  .active {
    outline: 1px solid red;
  }
</style>