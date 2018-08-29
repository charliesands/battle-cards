<template>
  <div class="home">

    <form v-on:submit.prevent="startGame">
      <input type="text" v-model="game.gameConfig.playerName">
      <input type="number" v-model="game.gameConfig.opponents">
      <input type="number" v-model="game.gameConfig.set">
      <button @click="startGame">Start</button>
      <button @click="listGames">Games</button>

    </form>

  </div>
</template>

<script>


  export default {
    name: "Home",
    data() {
      return {
        game: {
          gameConfig: {
            playerName: "",
            opponents: 1,
            set: 1
          }
        }
      }
    },

    components: {

    },
    methods: {
      startGame() {
        this.$store.dispatch('createGame', this.game)
      }
    },
    gameList() {
      this.$store.dispatch('listGames', this.game)
    }
  }

</script>