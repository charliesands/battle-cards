<template>
  <div class="enemy container-fluid">
    <div class="row">
      <div class="col align-text-center">
        <h1>
          {{enemy.name}}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2" v-for="card in enemy.hand" @click="setEnemyCard(card)" :class="{active: card == enemyCard}">
        <div v-if="card.visible">
          <img :src="card.img">
          <p>{{card.name}} <br> Attack:{{card.attack}} Health: {{card.health}} Defense: {{card.defense}} </p>
        </div>
        <div v-if="!card.visible">
          <img src="../assets/exploration2.jpg" class="card-back">
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
      },
      enemyCard() {
        return this.$store.state.enemyCard
      }
    },
    methods: {
      setEnemyCard(card) {
        this.$store.dispatch('setEnemyCard', card)
      }
    }
  }
</script>

<style>
  .card-back {
    width: auto;
    height: 300px
  }

  .active {
    outline: 1px solid red;
  }
</style>