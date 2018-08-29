import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    gameObject: {}
  },
  mutations: {
    startGame(state, data) {
      state.gameObject = data
    }
  },
  actions: {
    createGame({ commit, dispatch }, gameData) {
      gameApi.post('', gameData)
        .then(game => {
          commit('startGame', game.data)
        })
    },
    listGames({ commit, dispatch }, gameData) {
      gameApi.get('', gameData)
        .then(game => {
          dispatch(gameData)
        })
    }
  }

})
