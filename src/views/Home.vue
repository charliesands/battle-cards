<template>
  <div class="home">

    <form v-on:submit.prevent="startGame">
      <input type="text" v-model="game.gameConfig.playerName">
      <input type="number" v-model="game.gameConfig.opponents">
      <input type="number" v-model="game.gameConfig.set">
      <button @click="startGame">Start</button>
      <button type="button" @click="gameList">Games</button>

    </form>
    <div>
      <p v-for="game in gamesList">
        <!-- Game ID: {{game._id}} -->
        {{game.players[0].name}} vs. {{game.players[1].name}}
        <button @click="selectGame(game.id)">Continue</button>
      </p>
    </div>
  </div>
</template>

<script>
  import router from '../router.js'

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
    computed: {
      gamesList() {
        return this.$store.state.games
      },
      singleGame() {
        return this.$store.state.game
      }
    },
    components: {

    },
    methods: {
      startGame() {
        this.$store.dispatch('createGame', this.game)
      },
      gameList() {
        this.$store.dispatch('listGames')
      },
      //mounted listGames
      goToGame() {
        router.push({ name: 'game' }) //not used
      },
      selectGame(gameId) {
        this.$store.dispatch('getGame', gameId)
      }

    }
  }

</script>