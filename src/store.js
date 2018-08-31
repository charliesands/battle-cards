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
    playerCard: {}, //no need?
    enemyCard: {},
    fightObject: {}
  },
  mutations: {
    startGame(state, data) {
      state.gameObject = data
    },
    setList(state, data) {
      state.games = data
    },
    setPlayerCard(state, data) {
      state.playerCard = data
    },
    setEnemyCard(state, data) {
      state.enemyCard = data
    },
    setFight(state, data) {
      state.fightObject = data
    }

  },
  actions: {
    createGame({ commit, dispatch }, gameData) {
      gameApi.post('', gameData)
        .then(game => {
          console.log(game.data)
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
      gameApi.get('/' + gameId)
        .then(game => {
          commit('startGame', game.data.data)
          router.push({ name: 'game' })
        })
    },
    fight({ commit, dispatch }, fightObject) {
      gameApi.put('/' + fightObject.gameId, fightObject)
        .then(game => {
          console.log(game)
          dispatch('getGame', fightObject.gameId)
          // router.push({ name: 'game' })
        }
        )
    }
  }
})
