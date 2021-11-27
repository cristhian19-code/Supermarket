<template>
<div class="container__categoria">
    <div>
        <h1>SUPERMERCADO</h1>
        <ul>
            <li><a class="link__category" href="">Abarrotes <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Desayuno <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Lacteos y Huevos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Quesos y Fiambres <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Frutas y Verduras <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Carnes y Pollo <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Pescados y Mariscos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Pastelerias <i class="fas fa-chevron-right"></i></a></li>
        </ul>    
    </div>
    <div>
        <h1>ELECTRODOMESTICOS</h1>
        <ul>
            <li><a class="link__category" href="">Lavado y Secado <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Refrigeracion <i class="fas fa-chevron-right"></i></a></li>
            <li><router-link class="link__category" to="/categoria/cocina">Cocinas <i class="fas fa-chevron-right"></i></router-link></li>
            <li><a class="link__category" href="">Electrodomesticos de Cocina <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Electrodomesticos del Hogar <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Cuidado Personal <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Climatizacion <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Equipamiento Industrial <i class="fas fa-chevron-right"></i></a></li>
        </ul>    
    </div>
    <div>
        <h1>SUPERMERCADO</h1>
        <ul>
            <li><a class="link__category" href="">Abarrotes <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Desayuno <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Lacteos y Huevos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Quesos y Fiambres <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Frutas y Verduras <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Carnes y Pollo <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Pescados y Mariscos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Pastelerias <i class="fas fa-chevron-right"></i></a></li>
        </ul>    
    </div>
    <div>
        <h1>TECNOLOGIA</h1>
        <ul>
            <li><a class="link__category" href="">Televisores <i class="fas fa-chevron-right"></i></a></li>
            <li><router-link class="link__category" to="/categoria/computo">Computo <i class="fas fa-chevron-right"></i></router-link></li>
            <li><a class="link__category" href="">Telefonos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Videojuegos <i class="fas fa-chevron-right"></i></a></li>
            <li><a class="link__category" href="">Camaras <i class="fas fa-chevron-right"></i></a></li>
        </ul>    
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.container__categoria{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 25px;
    padding: 60px 10px 20px 10px;
}

@media (max-width: 900px) {
    .container__categoria{
        grid-template-columns: repeat(1,1fr);
    }
}

.container__categoria>div{
    padding: 15px;
}

.container__categoria ul{
    list-style: none;
    padding-left: 20px;
}

.link__category {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
}

.container__categoria li{
    margin: 10px 0;
}

.link__category:hover{
    background-color: rgb(36, 36, 36);
    border-radius: 3px;
    color: white;
    transition: .5s;
}
</style>
