<template>
  <Navbar />
  <div class="main">
    <TweetInput v-on:tweet="tweet" />
    <h3 class="title">Feeds</h3>
    <TweetCard v-for="tweet in tweets" v-bind:key="tweet.id" v-bind="tweet" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gambar from "./assets/pic.jpg";
import TweetCard from "./components/TweetCard.vue";
import TweetInput from "./components/TweetInput.vue";
export default {
  components: { Navbar, TweetCard, TweetInput },
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
      ],
    };
  },
  provide() {
    return {
      fullname: this.user.fullname,
      username: this.user.username,
      avatarUrl: this.user.avatarUrl,
    };
  },
  methods: {
    tweet(ele) {
      this.tweets.unshift({
        id: this.getHighestId,
        user: {
          fullname: "Tri Yoga",
          username: "@triyogaf",
        },
        tweet: {
          content: ele,
          like: 0,
          retweet: 0,
        },
      });
      console.log(this.tweets);
    },
  },
  computed: {
    getHighestId() {
      const ids = this.tweets.map((object) => {
        return object.id;
      });
      return Math.max(...ids) + 1;
    },
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
