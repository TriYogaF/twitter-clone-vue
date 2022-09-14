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
        <Avatar />
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
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  padding: 10px 10px;
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
