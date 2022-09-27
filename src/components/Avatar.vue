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
  border: 5px double white;
}

.tweetAvatar {
  width: 40px;
  height: 40px;
  border: 2px solid white;
}

.commentAvatar {
  width: 30px;
  height: 30px;
  border: 2px solid white;
}
</style>
