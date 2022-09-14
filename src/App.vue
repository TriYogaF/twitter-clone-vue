<template>
  <Navbar />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gambar from "./assets/pic.jpg";
export default {
  components: { Navbar },
  data() {
    return {
      user: {
        fullname: "Tri Yoga",
        username: "@triyogaf",
        avatarUrl: gambar,
      },
    };
  },
  provide() {
    return {
      // fullname: computed(() => this.user.fullname),
      fullname: this.user.fullname,
      username: this.user.username,
      avatarUrl: this.user.avatarUrl,
    };
  },
};
</script>

<style></style>
