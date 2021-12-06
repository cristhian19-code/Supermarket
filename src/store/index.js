import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    pushProduct(state,product){
      state.cart.push(product);
      console.log(state.cart);
    },
    cleanCart(state) {
      state.cart = []
    }
  },
  actions: {
    addShoppingCart({ commit, state }, product) {
      const repeatProd = state.cart.find(prod => prod.id == product.id)
      if (!repeatProd) {
        commit('pushProduct',product)
      }
    },
    cleanShoppingCart({ commit }) {
      commit('cleanCart')
    }
  },
  getters: {
    getLengthShoppingCart(state){
      return state.cart.length;
    },
    getTotal(state){
      let suma = 0;

      state.cart.map(prod => {
        suma += (prod.quantity*prod.price)
      })

      return suma 
    }
  }
})
