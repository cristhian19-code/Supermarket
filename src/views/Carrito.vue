<template>
  <div class="shopping__cart">
    <p>Carrito</p>
    <div class="container_table">
        <table>
        <thead>
            <tr>
                <th></th>
                <th>Nombre</th>
                <th>Precio/unit</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
            </tr>
        </thead>

        <CartItemVue v-for="product in cart" :key="product.name" 
            :name="product.name" 
            :price_unit="product.price" 
            :quantity="product.quantity" 
            :preview="product.preview"/>
        
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>S/{{getTotal}}</td>
        </tr>
    </table>
    </div>
    <button @click="()=>{
        showNotification();
        cleanShoppingCart();
    }" class="btn__shopping">
       <i class="fas fa-shopping-bag"></i> Comprar
    </button>

    <NotificationVue :status="true" title="Exito!" message="Compra exitosa"/>
    
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CartItemVue from '../components/CartItem.vue'
import NotificationVue from '../components/Notification.vue'

export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['getTotal'])
    },
    methods: {
        showNotification(){
            document.querySelector('.notification').classList.add('animation')
            
            setTimeout(() => {
                document.querySelector('.notification').classList.remove('animation')
            }, 4000);
        },
        ...mapActions(['cleanShoppingCart'])
    },
    components: {
        CartItemVue,
        NotificationVue
    }
}
</script>

<style>
.shopping__cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px 0px 10px;
}

.shopping__cart>p{
    font-size: 60px;
    margin: 20px 0;
    text-align: center;
}
.container_table{
    width: 100%;
    overflow-x: auto;
}

table{
	background-color: white;
	text-align: left;
	border-collapse: collapse;
	width: 100%;
    margin-bottom: 20px;
}

th, td{
	padding: 20px;
    cursor: pointer;
}

thead{
	background-color: rgb(36, 36, 36);
	color: white;
}

tr:nth-child(even){
	background-color: #ddd;
}

tr:hover td{
	background-color: rgb(77, 77, 77);
	color: white;
}

.btn__shopping{
    padding: 20px 100px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    background-color: rgb(36, 36, 36);
    color: white;
    margin-bottom: 20px;
    font-size: 17px;
}
</style>