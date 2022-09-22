<template>
  <div class="navbar">
    <div class="navbar-left">
      <h3>Simple Twitter Clone with Vue</h3>
    </div>
    <div class="navbar-right">
      <div class="navbar-account">
        <p>{{ fullname }}</p>
        <p>{{ username }}</p>
      </div>
      <div class="navbar-pic">
        <Avatar :avatar="avatarUrl" :styleImg="'isLarge'" />
        <!-- <img :src="avatarUrl" alt="pic" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  inject: ["fullname", "username", "avatarUrl"],
  components: { Avatar },
};
</script>

<style>
.navbar {
  background-color: #0f3460;
  align-items: center;
  padding: 10px 10px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}

.navbar,
.navbar-right {
  display: flex;
  justify-content: space-around;
}
.navbar-account {
  padding: 0px 10px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
