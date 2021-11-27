<template>
    <div class="section">
      <h1 v-if="title">{{title}}</h1>
      <div class="card-group">
        <CardVue v-for="product in products" :key="product.title" :title="product.title" :image="product.url" :price="product.price" :id="product.id"/>
      </div>
    </div>
</template>

<script>
import CardVue from '../components/Card.vue'

export default {
    props: {
        title: {
            type: String
        },
        products: {
            type: Array
        }
    },
    components: {
        CardVue
    },
}
</script>

<style>
    .section {
        padding: 50px 0 40px 0;
        display: flex;
        flex-direction: column;  
    }

    .section>h1{
        font-size: 40px;
        margin: 20px 0px  20px 20px;
    }

    .card-group{
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: center;
    }
</style>