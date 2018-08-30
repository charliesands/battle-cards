<template>
  <div class="player container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <h1>
          {{player.name}}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2" v-for="card in player.hand" @click="fnclick(player.id, card.id)">
        <img :src="card.img">
        <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}}</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "player",
    props: {
      fnclick: {
        type: Function,
        required: true
      }
    },
    computed: {
      player() {
        return this.$store.state.gameObject.players[0];
      }
    },
    method: {

    }
  }
</script>