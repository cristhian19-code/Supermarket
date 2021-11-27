<template>
  <div class="contactenos">
    <div class="banner__contactenos">
        
    </div>
    <div class="description__contact">
        <div class="description">
            <p class="title__description">Contactenos</p>
            <p class="content__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nihil commodi quidem vero voluptate esse cupiditate mollitia voluptatum optio, dolore eum ad itaque quas consequuntur impedit aliquid deleniti, laborum quam.</p>
        </div>
        <div class="form">
            <p class="form__title">FORMULARIO</p>
            <input class="form__control" type="text" placeholder="Nombre completo"/>
            <input class="form__control" type="text" placeholder="Email"/>
            <select class="form__control" name="" id="">
                <option value="">Queja</option>
                <option value="">Consulta</option>
                <option value="">Promociones</option>
            </select>
            <textarea rows="10" class="form__control" placeholder="Mensaje"></textarea>
            <button >Enviar <i class="far fa-paper-plane"></i></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contactenos{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.banner__contactenos{
    width: 100%;
    background-image: url(https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
}

.description__contact{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 40px;
}

.description__contact>.description{
    display: flex;
    flex-direction: column;
}

.description__contact>div:first-child{
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title__description{
    font-size: 40px;
    margin-bottom: 10px;
}

.form{
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-top: -100px;
    background-color: white;
    border-radius: 5px;
    padding: 40px 20px;
    box-shadow: 2px 2px 7px -3px rgba(0,0,0,0.39);
}

.form__control{
    margin: 10px 0;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid rgb(174, 174, 174);
    background-color: white;
}

.form__title{
    font-size: 40px;
    font-weight: 100;
    text-align: center;
}

.form>button{
    background-color: rgb(36, 36, 36);
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 2px;
}

.form>button:hover{
    color: rgb(36, 36, 36);
    background-color: white;
    border: 1px solid rgb(36, 36, 36);
    transition: .5s;
}


textarea{
    resize: none;
}

@media (max-width: 900px) {
    .description__contact{
        grid-template-columns: repeat(1,1fr);
    }

    .form{
        width: 100%;
        margin-top: 0;
    }
}
</style>