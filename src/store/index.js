import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {

    add(state, cardInfo){
      state.todoList.push(cardInfo)
    }

  },
  actions: {

    add({commit}, cardInfo){
      commit('add', cardInfo)
    }

  },
  modules: {
  }
})


