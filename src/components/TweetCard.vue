<template>
  <div class="content">
    <div class="post">
      <div class="post-name">
        <Avatar />
        <p class="name">{{ this.user.fullname }} {{ this.user.username }}</p>
      </div>
      <p>{{ this.tweet.content }}</p>
    </div>
    <div class="reply"></div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  props: {
    id: Number,
    user: Object,
    tweet: Object,
  },
  components: { Avatar },
};
</script>

<style>
/* .main {
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.15);
  justify-content: center;
  margin: auto;
  margin-top: 75px;
  padding: 16px;
}

.title {
  display: block;
  padding: 16px 4px;
} */

.content {
  display: flex;
  /* justify-content: center; */
  background-color: #645caa;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
}
.post-name {
  display: flex;
  align-items: center;
}
.name {
  padding-left: 12px;
}
</style>
