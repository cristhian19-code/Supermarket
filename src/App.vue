<template>
  <div>
    <SidebarVue />
    <router-view/>
    <ButtonWspVue />
    <FooterVue />
  </div>
</template>
<script>
import ButtonWspVue from './components/ButtonWsp.vue'
import FooterVue from './components/Footer.vue'
import SidebarVue from './components/Sidebar.vue'
export default {
  components:{
    SidebarVue,
    FooterVue,
    ButtonWspVue
  }  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  box-sizing: border-box;
}
</style>
