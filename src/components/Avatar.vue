<template>
  <img :src="avatar" alt="avatar" />
</template>

<script>
export default {
  // inject: ["avatarUrl"],
  props: {
    avatar: String,
  },
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
