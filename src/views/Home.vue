<template>
  <div class="home">
    <div class="banner">
      <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="content__banner">
        <p class="title__banner">Supermarket</p>
        <p class="description__banner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptate aliquid error facilis exercitationem nostrum, labore asperiores consectetur numquam magni odio itaque dignissimos consequatur quae. Modi quasi fugit vel enim.</p>
        <button>Ver catalogo</button>
      </div>
    </div>
    <SectionHomeVue :products="offers" title="Ofertas"/>
  </div>
</template>

<script>
import FooterVue from '../components/Footer.vue'
import SectionHomeVue from '../components/SectionHome.vue'
import {findProductsbyOffer} from '../helpers/functions'
export default {
  name: 'Home',
  data() {
    return {
      offers: []
    }
  },
  components: {
    SectionHomeVue,
    FooterVue
  },
  async created() {
    this.offers = await findProductsbyOffer();
  },
}
</script>

<style scoped>
  .banner{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .banner img{
    width: 100%;
    height: 100vh;
  }

  .banner div{
    position: absolute;
    color: white;
    width: 50vw;
    padding: 30px;
  }

  .description__banner{
    margin-top: 20px;
  }

  .title__banner{
    font-size: 60px;
  }

  .content__banner button{
    height: 35px;
    width: 150px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 30px;
  }
</style>
