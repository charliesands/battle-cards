<template>
  <div class="game">
    <div v-if="gameObject.over">
      {{game.winner.name}}
    </div>
    <div v-else>
      <player>
        <!-- :fnclick="setPlayerCard"> -->
      </player>
      <!-- <div v-if="player.name && enemy.name"> -->
      <button @click="fight" v-if="">Fight</button>
      <!-- </div> -->
      <enemy>
        <!-- :fnclick="setOpponentCard"> -->
      </enemy>
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
        // fightObject: {
        //   playerId: "",
        //   playerCardId: "",
        //   opponentId: "",
        //   opponentCardId: "",
        //   gameId: ""
        // }
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
      }
    },
    methods: {  ///can i use same name
      fight() {
        let attack = {
          gameId: this.gameObject.id,
          playerId: this.player.id,
          opponentId: this.opponentId,
          playerCardId: this.playerCard.id,
          opponentCardId: this.opponentCard.id
        }
        this.$store.dispatch('fight', attack)
      },
      // setPlayerCard(playerId, playerCardId) {
      //   this.fightObject.playerId = playerId
      //   this.fightObject.playerCardId = playerCardId
      // },
      // setOpponentCard(opponentId, opponentCardId) {
      //   this.fightObject.opponentId = opponentId
      //   this.fightObject.opponentCardId = opponentCardId
      // }

    },
    components: {
      Player,
      Enemy
    }
  }
</script>