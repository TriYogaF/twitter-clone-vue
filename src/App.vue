<template>
  <Navbar />
  <div class="main">
    <TweetInput @addInput="addTweet" />
    <h3 class="title">Feeds</h3>
    <TweetCard v-for="tweet in tweets" v-bind:key="tweet.id" v-on:retweet="retweetCount" v-on:deleteTweet="ondeleteTweet" v-on:like="doLike" @unlike="doUnlike" @reply="addReply" @likeComment="doLikeComment" v-bind="tweet" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gambar from "./assets/pic.jpg";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
export default {
  components: { Navbar },
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
          comments: [
            {
              id: 1.1,
              user: {
                fullname: "Lyn",
                username: "@lyn",
                avatarUrl: user2,
              },
              reply: {
                content: "lorem ipsum dolor sit amet",
                like: 2,
                retweet: 6,
              },
            },
            {
              id: 1.2,
              user: {
                fullname: "Elq",
                username: "@elq",
                avatarUrl: user1,
              },
              reply: {
                content: "aaaaaaaaaaaaaaaaaaaa",
                like: 1,
                retweet: 3,
              },
            },
          ],
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
          comments: [],
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
    // clickFocus() {
    //   this.$refs.tes1.focus();
    //   console.log(`focus`);
    // },
    // clickBlur() {
    //   this.$refs.tes1.blur();
    //   console.log(`blur`);
    // },
    addTweet(ele) {
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
        comments: [],
      });
      console.log(this.tweets);
      // console.log(ele);
    },
    addReply(ele, num) {
      this.tweets
        .find(({ id }) => id == num)
        .comments.unshift({
          id: parseFloat(`${num}.${this.getHighestId}`),
          user: {
            fullname: "Tri Yoga",
            username: "@triyogaf",
            avatarUrl: gambar,
          },
          reply: {
            content: ele,
            like: 0,
            retweet: 0,
          },
        });
      console.log(this.tweets.find(({ id }) => id == num));
    },
    doLike(e) {
      console.log(this.tweets.find(({ id }) => id == e).tweet.like++);
    },
    doUnlike(e) {
      console.log(this.tweets.find(({ id }) => id == e).tweet.like--);
    },
    doLikeComment(e) {
      console.log(`like comment from parents`);
      console.log(this.findCommentById(e));
    },
    doUnlikeComment(e) {
      console.log(this.tweets.find(({ id }) => id == e).tweet.like--);
    },
    retweetCount(e) {
      this.tweets.find(({ id }) => id == e).tweet.retweet++;
    },
    ondeleteTweet(e) {
      // this.tweets.filter((item) => item.id !== e);
      this.tweets.splice(
        this.tweets.findIndex((item) => item.id == e),
        1
      );
      console.log(e);
      console.log(this.tweets);
    },

    findCommentById(e) {
      let results = {};
      this.tweets.some((o) => (results = o.id === e ? o : find(o.comments || [], e)));
      return results;
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
  // mounted() {
  //   this.$refs.tes1.focus();
  // },
  // unmounted() {
  //   this.$refs.tes1.blur();
  // },
};
</script>

<style>
.main {
  max-width: 800px;
  /* background-color: rgba(255, 255, 255, 0.15); */
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

.card {
  margin: 16px 0px;
  padding: 8px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
