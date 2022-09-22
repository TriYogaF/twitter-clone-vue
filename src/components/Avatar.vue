<template>
  <img :src="avatar" :class="this.styleImg" alt="avatar" />
</template>

<script>
export default {
  // inject: ["avatarUrl"],
  props: {
    avatar: String,
    styleImg: String,
  },
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.isLarge {
  width: 50px;
  height: 50px;
}

.isSmall {
  width: 40px;
  height: 40px;
  border: 2px solid white;
}
</style>
