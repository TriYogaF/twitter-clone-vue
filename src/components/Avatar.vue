<template>
  <img :src="avatarUrl" alt="avatar" />
</template>

<script>
export default {
  inject: ["avatarUrl"],
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
