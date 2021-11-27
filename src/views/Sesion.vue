<template>
  <div class="session">
      <div class="container__session">
        <div class="img__session">
            <img src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" alt="">
        </div>
        <div v-if="session" class="form__session">
            <p class="form__title">Iniciar Sesion</p>
            <input type="email" class="form__control" placeholder="Email" />
            <input type="password" class="form__control" placeholder="Password" />
            <button>Ingresar <i class="fas fa-sign-in-alt"></i></button>

            <a @click.prevent="session = !session" href="#">Aun no esta registrado ?</a>
        </div>

        <div v-else class="form__session">
            <p class="form__title">Registrarme</p>
            <input type="text" class="form__control" placeholder="Nombre Completo" />
            <input type="text" class="form__control" placeholder="Username" />
            <input type="email" class="form__control" placeholder="Email" />
            <input type="password" class="form__control" placeholder="Password" />
            <button>registrarme <i class="fas fa-sign-in-alt"></i></button>

            <a @click.prevent="session = !session" href="#">Ya tiene una cuenta?</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            session: true
        }
    },
}
</script>

<style>
.session{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.container__session{
    display: flex;
    justify-content: center;
    margin: 100px 0;
}

.img__session>img{
    height: 500px;
}

.form__session{
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
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
    margin-bottom: 20px;
}

.form__session>button{
    margin-top: 10px;
    background-color: rgb(36, 36, 36);
    color: white;
    cursor: pointer;
    padding: 13px 0;
    border: 1px solid rgb(36, 36, 36);
    border-radius: 2px;
}

.form__session>button:hover{
    color: rgb(36, 36, 36);
    background-color: white;
    transition: .5s;
}

.form__session>a{
    text-align: center;
    margin-top: 10px;
    color: blue;
    text-decoration: none;
}

</style>
