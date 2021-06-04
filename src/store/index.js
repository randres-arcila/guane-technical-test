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

      state.todoList = state.todoList.sort((a, b) => {
        if (a.date < b.date){
          return -1;
        }
        if (a.date > b.date){
          return 1;
        }
        return 0;
      })

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


