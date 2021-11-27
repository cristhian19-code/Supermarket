<template>
  <div class="card">
    <div class="card__header">
        <img :src="image" alt="" />
    </div>
    <div class="card__body">
        <h1>{{title}}</h1>
        <div>
            <span>S/.{{price}}</span>
        </div>
    </div>
    <div class="card__footer">
        <router-link class="card__button" :to="`/producto/${id}`">Ver mas <i class="fas fa-chevron-right"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        id: {
            type: Number
        }
    },
};
</script>

<style>
:root {
    --color-primary: #144B6A
}

.card {
    margin-top: 10px;
    width: 350px;
    border-radius: 7px;
    box-shadow: 3px 3px 9px -3px rgba(0,0,0,0.39);
}

.card__header{
    border-radius: 7px 7px 0 0;
    width: 350px;
    max-height: 300px;
    overflow: hidden;
    cursor: pointer;
}

.card__header img {
  width: 100%;
  height: 300px;
  transition: .5s;
}

.card__header img:hover{
    transform: scale(1.1);
}

.card__body,
.card__footer {
  padding: 20px;
}

.card__body h1{
    margin: 10px 0;
    color: rgb(88, 88, 88);
}

.card__button{
    height: 35px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    width: 150px;
    text-decoration: none;
    background-color: rgb(36, 36, 36);
    color: white;
    padding: 8px 20px;
    border: 1px solid rgb(36, 36, 36);
}

.card__button:hover{
    color: rgb(36, 36, 36);
    background-color: white;
    transition: .3s;
}

</style>
