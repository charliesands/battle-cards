<template>
  <div class="player container">
    <h1>
      {{player.name}}
    </h1>
    <div class="">
      <div class="">
        <div class="" v-for="card in player.hand">
          <img :src="card.img">
          <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}}</p>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: "player",
    computed: {
      player() {
        return this.$store.state.gameObject.players[0];
      }
    },
    method: {

    }
  }
</script>