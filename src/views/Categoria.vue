<template>
    <SectionHomeVue :products="products"/>
</template>

<script>
import SectionHomeVue from '../components/SectionHome.vue';
import { findProductsbyCategory } from '../helpers/functions';

export default {
    data() {
        return {
            products: []
        }
    },
    components: {
        SectionHomeVue
    },
    async created() {
        const category = this.$route.params.category;
        this.products = await findProductsbyCategory(category)
    },
}
</script>

<style>

</style>