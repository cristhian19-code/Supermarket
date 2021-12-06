<template>
  <div id="sidebar">
    <button class="menu__sidebar">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="header__sidebar">
      <img
        src="https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        height="70px"
        width="70px"
      />
      <div class="header__sidebar__info">
        <h3>Christian Ricardo</h3>
        <span>@christian99</span>
      </div>
    </div>
    <div class="inputs__sidebar">
      <router-link
        class="btn__sidebar"
        v-for="item in sidebaritems"
        :key="item.name"
        :to="{ name: item.name }"
      >
        <i :class="item.icon"></i>{{ item.name
        }}<span class="length__cart" v-if="item.name == 'Carrito'">{{
          getLengthShoppingCart
        }}</span>
      </router-link>

      <button class="btn__sidebar">
        <i class="fas fa-sign-out-alt"></i>
        Cerrar Sesion
      </button>
    </div>
    <div class="footer__sidebar"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sidebaritems: [
        { name: "Inicio", icon: "fas fa-home" },
        { name: "Categorias", icon: "fas fa-store" },
        { name: "Contactanos", icon: "fas fa-phone-volume" },
        { name: "IniciarSesion", icon: "fas fa-user" },
        { name: "Carrito", icon: "fas fa-shopping-cart" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getLengthShoppingCart"]),
  },
  mounted() {
    const menu = document.querySelector(".menu__sidebar");

    menu.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("active");
      document.querySelector(".menu__sidebar").classList.toggle("animation");
    });
  },
};
</script>
<style scoped>
#sidebar {
  position: fixed;
  width: 250px;
  left: -250px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  color: black;
  flex-direction: column;
  transition: 0.4s linear;
  z-index: 1;
}

.header__sidebar {
  text-align: center;
  height: 40vh;
  position: relative;
  overflow: hidden;
}

.header__sidebar img {
  width: 100%;
  height: 100%;
}

.header__sidebar__info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
}

.header__sidebar__info span {
  color: rgb(167, 167, 167);
}

.header__sidebar__info h3 {
  font-weight: bold;
}

.header__sidebar p {
  font-size: 20px;
  margin-top: 10px;
}

.inputs__sidebar {
  height: 60vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
}

.footer__sidebar {
  height: 10vh;
}

.btn__sidebar {
  height: 60px;
  width: 100%;
  background-color: transparent;
  text-align: start;
  padding-left: 30px;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn__sidebar i {
  width: 20px;
}

.btn__sidebar:hover {
  background-color: rgb(36, 36, 36);
  color: white;
  transition: 0.2s ease-in;
}

#sidebar.active {
  left: 0px;
}

.length__cart {
  height: 23px;
  width: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 13px;
  font-weight: bold;
  background-color: rgb(53, 167, 42);
  color: white;
}

.menu__sidebar {
  position: absolute;
  top: 20px;
  left: 265px;
  height: 40px;
  width: 40px;
  background-color: rgb(36, 36, 36);
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.menu__sidebar span {
  height: 3px;
  width: 30px;
  background: white;
  position: absolute;
  transition: 0.5s;
  border-radius: 10px;
}

.menu__sidebar span:nth-child(1) {
  position: absolute;
  width: 20px;
  left: 5px;
  transform: translateY(-8px);
}

.menu__sidebar span:nth-child(2) {
  position: absolute;
  width: 10px;
  left: 5px;
  transform: translateY(8px);
}

.menu__sidebar.animation span:nth-child(3) {
  transform: translateX(40px);
}

.menu__sidebar.animation span:nth-child(1) {
  transform: translateX(0px) rotate(45deg);
  width: 30px;
  transition-delay: 0.015s;
}

.menu__sidebar.animation span:nth-child(2) {
  transform: translateX(0px) rotate(315deg);
  width: 30px;
  transition-delay: 0.02s;
}
</style>
