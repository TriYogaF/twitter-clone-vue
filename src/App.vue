<template>
  <Navbar />
  <div class="main">
    <h3 class="title">Feeds</h3>
    <TweetCard v-for="tweet in tweets" v-bind:key="tweet.id" v-bind="tweet" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gambar from "./assets/pic.jpg";
import TweetCard from "./components/TweetCard.vue";
export default {
  components: { Navbar, TweetCard },
  data() {
    return {
      user: {
        fullname: "Tri Yoga",
        username: "@triyogaf",
        avatarUrl: gambar,
      },
      indexTweets: 0,
      tweets: [
        {
          id: 1,
          user: {
            fullname: "Elq",
            username: "@elq",
          },
          tweet: {
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, veniam laborum a sint doloremque",
            like: 10,
            retweet: 2,
          },
        },
        {
          id: 2,
          user: {
            fullname: "Lyn",
            username: "@lyn",
          },
          tweet: {
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, veniam laborum a sint doloremque",
            like: 2,
            retweet: 0,
          },
        },
        // {
        //   id: 3,
        //   user: this.user,
        //   tweet: "repellat ab atque, assumenda odio optio iure in perspiciatis. Impedit commodi itaque dicta facere sint? Quaerat?",
        // },
      ],
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

<style>
.main {
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.15);
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  padding: 16px;
  border-radius: 12px;
}
.title {
  display: block;
  padding: 16px 4px;
}
</style>
