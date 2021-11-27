<template>
    <tr>
        <td>
            <img :src="preview" alt="" height="50" width="50">
        </td>
        <td>{{name}}</td>
        <td>S/{{price_unit}}</td>
        <td>{{quantity}}</td>
        <td>S/{{quantity * price_unit}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        price_unit: {
            type: String
        },
        quantity: {
            type: Number
        },
        preview: {
            type: String
        }
    }
}
</script>

<style>

</style>