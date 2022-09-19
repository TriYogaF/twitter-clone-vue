<template>
  <Navbar />
  <div class="main">
    <TweetInput v-on:tweet="tweet" />
    <h3 class="title">Feeds</h3>
    <TweetCard v-for="tweet in tweets" v-bind:key="tweet.id" v-on:like="likeCount" v-on:retweet="retweetCount" :on-delete="deleteTweet" v-bind="tweet" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gambar from "./assets/pic.jpg";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
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
            avatarUrl: user1,
          },
          tweet: {
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, veniam laborum a sint doloremque",
            like: 10,
            retweet: 2,
          },
          comments: {},
        },
        {
          id: 2,
          user: {
            fullname: "Lyn",
            username: "@lyn",
            avatarUrl: user2,
          },
          tweet: {
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, veniam laborum a sint doloremque",
            like: 2,
            retweet: 0,
          },
          comments: {},
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
          avatarUrl: gambar,
        },
        tweet: {
          content: ele,
          like: 0,
          retweet: 0,
        },
        comments: {},
      });
      console.log(this.tweets);
      console.log(ele);
    },
    likeCount(e) {
      // this.tweets.find(({ id }) => id == e).tweet.like + 1;
      console.log(this.tweets.find(({ id }) => id == e).tweet.like++);
      // console.log(e.target);
    },
    retweetCount(e) {
      // this.tweets.find(({ id }) => id == e).tweet.retweet++;
      console.log(this.tweets.find(({ id }) => id == e).tweet.retweet++);
    },
    deleteTweet(e) {
      // this.tweets.filter((item) => item.id !== e);
      this.tweets.splice(
        this.tweets.findIndex((item) => item.id == e),
        1
      );
      console.log(e);
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
