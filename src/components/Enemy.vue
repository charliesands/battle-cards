<template>
  <div class="enemy container">
    <div class="row">
      <div class="col-sm-2">
        <h1>
          {{enemy.name}}
        </h1>
        <div v-for="card in enemy.hand">
          <img :src="card.img">
          <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}}</p>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: "enemy",
    computed: {
      enemy() {
        return this.$store.state.gameObject.players[1];
      }
    },
    method: {

    }
  }
</script>