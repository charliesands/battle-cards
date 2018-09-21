<template>
  <div class="game">
    <div v-if="gameObject.over">
      {{gameObject.winner.name}} Wins!
    </div>
    <div v-else>
      <player></player>
      <div>
        <h1>Choose two cards and </h1>
        <button @click="fight">Fight!</button>
      </div>
      <enemy></enemy>
    </div>
  </div>

</template>

<script>
  import Player from '../components/Player'
  import Enemy from '../components/Enemy'
  export default {
    name: "game",
    data() {
      return {
      }
    },
    computed: {
      gameObject() {
        return this.$store.state.gameObject;
      },
      playerCard() {
        return this.$store.state.playerCard
      },
      player() {
        return this.gameObject.players[0]
      },
      opponent() {
        return this.gameObject.players[1]
      },
      opponentCard() {
        return this.$store.state.opponentCard
      },
      enemyCard() {
        return this.$store.state.enemyCard
      }
    },
    methods: {
      fight() {
        let attack = {
          gameId: this.gameObject.id,
          playerId: this.player.id,
          opponentId: this.opponent.id,
          playerCardId: this.playerCard.id,
          opponentCardId: this.enemyCard.id
        }
        this.$store.dispatch('fight', attack)
      },
    },
    components: {
      Player,
      Enemy
    }
  }
</script>