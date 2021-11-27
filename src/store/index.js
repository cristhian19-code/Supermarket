import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    pushProduct(state,product){
      state.cart.push(product);
      console.log(state.cart);
    }
  },
  actions: {
    addShoppingCart({commit,state},product){
      console.log(state.cart.find(prod => prod.id == product.id));
      commit('pushProduct',product)
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
