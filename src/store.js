import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    gameObject: {},
    games: [],
    game: {}
  },
  mutations: {
    startGame(state, data) {
      state.gameObject = data
    },
    setList(state, data) {
      state.games = data
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    createGame({ commit, dispatch }, gameData) {
      gameApi.post('', gameData)
        .then(game => {
          commit('startGame', game.data)
          router.push({ name: 'game' })
        })
    },
    listGames({ commit, dispatch }) {
      gameApi.get('')
        .then(games => {
          commit('setList', games.data)
        })
    },
    getGame({ commit, dispatch }, gameId) {
      gameApi.get('/', gameId)
        .then(game => {
          console.log(game)
          // commit('setGame', game.data._id)
          // router.push({ name: 'game' }) //game?
        })
    }
  }

})
