<template>
  <div class="game">
    <player :fnclick="setPlayerCard"></player>
    <!-- <div v-if="player.name && enemy.name"> -->
    <button @click="fight">Fight</button>
    <!-- </div> -->
    <enemy :fnclick="setOpponentCard"></enemy>
  </div>

</template>

<script>
  import Player from '../components/Player'
  import Enemy from '../components/Enemy'
  export default {
    name: "game",
    data() {
      return {
        fightObject: {
          playerId: "",
          playerCardId: "",
          opponentId: "",
          opponentCardId: "",
          gameId: ""
        }
      }
    },
    computed: {
      gameObject() {
        return this.$store.state.gameObject;
      }
    },
    methods: {  ///can i use same name
      fight() {
        this.fightObject.gameId = this.gameObject.id
        this.$store.dispatch('fight', this.fightObject)
      },
      setPlayerCard(playerId, playerCardId) {
        this.fightObject.playerId = playerId
        this.fightObject.playerCardId = playerCardId
      },
      setOpponentCard(opponentId, opponentCardId) {
        this.fightObject.opponentId = opponentId
        this.fightObject.opponentCardId = opponentCardId
      }

    },
    components: {
      Player,
      Enemy
    }
  }
</script>