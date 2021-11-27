<template>
<footer>
    <div class="content-footer">
        <div class="footer-item">
            <h1>Categorias</h1>
            <ul class="list">
                <li><a href="">Supermercado</a></li>
                <li><a href="">Electrodomesticos</a></li>
                <li><a href="">Tecnologia</a></li>
                <li><a href="">Hogar</a></li>
                <li><a href="">Moda</a></li>
                <li><a href="">Dormitorio</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <h1>Redes Sociales</h1>
            <ul class="list">
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Whatsapp</a></li>
            </ul>
        </div>
        <div class="footer-item">
            <h1>Quienes Somos?</h1>
        </div>
    </div>
    <div class="social-footer">
        <button class="social"><i class="fab fa-facebook-f"></i></button>
        <button class="social"><i class="fab fa-twitter"></i></button>
        <button class="social"><i class="fab fa-instagram"></i></button>
        <button class="social"><i class="fab fa-linkedin-in"></i></button>
    </div>
</footer>
</template>

<script>
export default {
}
</script>

<style>
:root {
    --color-primary: #144B6A
}

footer{
    background-color: rgb(36, 36, 36);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0;
}

.content-footer{
    padding: 20px;
    display: grid;
    width: 90%;
    flex-wrap: wrap;
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid white;
}

.list{
    list-style: none;
}

.list li a {
    color: lightcyan;
    text-decoration: none;
}

.list li {
    margin-top: 7px;
}

.social-footer{
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 20px;
}

.social{
    background-color: transparent;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

.social:hover{
    transition: .5s ease;
    transform: scale(1.1);
}

@media (max-width: 900px) {
    .content-footer{
        grid-template-columns: repeat(1, 1fr);
    }
    .footer-item{
        display: block;
        margin-top: 20px;
    }
}
</style>