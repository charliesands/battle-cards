<template>
  <div class="enemy container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <h1>
          {{enemy.name}}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2" v-for="card in enemy.hand" @click="fnclick(enemy.id, card.id)">
        <div v-if="card.visible">
          <img :src="card.img">
          <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}} </p>
        </div>
        <div v-if="!card.visible">
          <img src="../assets/exploration2.jpg">
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: "enemy",
    props: {
      fnclick: {
        type: Function,
        required: true
      }
    },
    computed: {
      enemy() {
        return this.$store.state.gameObject.players[1];
      }
    },
    method: {

    }
  }
</script>