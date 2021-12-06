<template>
  <section class="notification">
    <img v-if="status" class="notification_img" src="../assets/check.png" alt="" />
    <img v-else class="notification_img" src="../assets/close.png" alt="" />

    <div>
      <h3>{{title}}</h3>
      <p>{{message}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean
    },
    message: {
      type: String
    },
    title: {
      type: String
    }
  },
};
</script>

<style>
.notification {
  position: fixed;
  align-items: center;
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  right: 10px;
  background-color: rgb(241, 241, 241);
  border-radius: 10px;
  color: rgb(95, 95, 95);
  top: 10px;
  box-shadow: 5px 5px 13px rgb(161, 161, 161);
  transition: 1s;
  top: -50px;
  opacity: 0;
  z-index: 1000;
}

.notification p {
  font-size: 14px;
  margin-top: 5px;
}

.notificacion_img {
  height: 30px;
  width: 30px;
}

.notification.animation {
  top: 20px;
  opacity: 1;
}
</style>