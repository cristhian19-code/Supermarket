<template>
    <div class="container__product">
        <vueper-slides fade :touchable="true" fixed-height="600px">
            <vueper-slide
                v-for="(image, i) in product.photos"
                :key="i"
                :image="image"
            />
        </vueper-slides>
        <div class="container__desprod">
            <h1 class="title">{{product.title}}</h1>
            <p class="description">{{product.description}}</p>
            
            <h1 class="text-red">S/{{product.price_discount}}</h1>
            <h2 class="text-muted" v-if="product.price_discount != product.price"><del>S/{{product.price}}</del></h2>

            <button @click="addShoppingCart(prod_cart)" class="btn__buy">
                <i class="fas fa-cart-plus"></i> Agregar al carrito
            </button>
        </div>
    </div>

    <div class="recommendations">

    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { mapActions } from 'vuex';
import {productCart} from '../helpers/functions'
import { findProductbyID } from '../helpers/functions';

export default {
    data() {
        return {
            product: {},
            prod_cart: {}
        }
    },
    components: { 
        VueperSlides, 
        VueperSlide 
    },
    methods: {
        ...mapActions(['addShoppingCart'])
    },
    async created() {
        const id = this.$route.params.id;
        this.product = await findProductbyID(id);
        this.prod_cart = await productCart(id);
    },
}
</script>

<style>
.vueperslides__arrow{
    color: black !important;
}

.vueperslides{
    z-index: 0;
}

.container__product{
    padding: 30px 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}

.container__desprod{
    padding: 20px;
}

.title,
.description{
    margin: 20px 0;
}

.text-red{
    color: rgb(219, 63, 63);
}

.text-muted{
    color: rgb(172, 172, 172);
}

@media (max-width: 900px) {
    .container__product{
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: repeat(2,1fr);
    }
}

.btn__buy{
    margin-top: 20px;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 20px;
    background-color: #25d366;
    padding: 15px 50px;
}

.btn__buy:hover{
    box-shadow: 3px 3px 9px -3px rgba(0,0,0,0.39);
    transition: .5s;
}

.recommendations{
    display: flex;
}
</style>