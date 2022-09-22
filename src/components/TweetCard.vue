<template>
  <div class="card">
    <div class="content">
      <div class="post">
        <div class="post-name">
          <Avatar :avatar="this.user.avatarUrl" :class="'isSmall'" />
          <p class="name">{{ this.user.fullname }} {{ this.user.username }}</p>
        </div>
        <p v-if="tweet">{{ this.tweet.content }}</p>
        <p v-else-if="reply">{{ this.reply.content }}</p>
        <div class="likeandretweet">
          <div v-if="tweet" class="parent">
            <svg v-if="!like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLike">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"
              />
            </svg>
            <svg v-else-if="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLike">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"
              />
            </svg>
            {{ this.tweet.like }}
          </div>
          <div v-else-if="reply" class="child">
            <svg v-if="!likeDislike" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLikeComment">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"
              />
            </svg>
            <svg v-else-if="likeDislike" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLikeComment">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"
              />
            </svg>
            {{ this.reply.like }}
          </div>
          <!-- <span v-if="tweet">
            {{ this.tweet.like }}
          </span>
          <span v-else-if="reply">
            {{ this.reply.like }}
          </span> -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="$emit('retweet', id)">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
              fill="rgba(0,0,0,1)"
            />
          </svg>
          <span v-if="tweet">
            {{ this.tweet.retweet }}
          </span>
          <span v-else-if="reply">
            {{ this.reply.retweet }}
          </span>
          <svg v-if="this.user.username == '@triyogaf'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="onDelete">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="tweet" class="reply">
      <KeepAlive>
        <TweetInput ref="input" v-if="showReply" :inputReply="true" :id="this.id" @addInput="addReply" @closeInput="handleShow" />
        <p class="reply-title" v-else @click="handleShow">Reply</p>
      </KeepAlive>
    </div>
    <div v-if="hasComment" class="comment">
      <TweetCard @likeComment="handleLikeComment" v-for="item in comments" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  data() {
    return {
      like: false,
      likeDislike: false,
      showReply: false,
    };
  },
  props: {
    id: Number,
    user: Object,
    tweet: Object,
    comments: Array,
    reply: Object,
  },
  components: { Avatar },
  emits: ["retweet", "deleteTweet", "like", "unlike", "reply", "close", "likeComment"],
  methods: {
    handleLike() {
      this.like = !this.like;
      if (this.like) {
        this.$emit("like", this.id);
        console.log(`like tweet`);
      } else if (!this.like) {
        this.$emit("unlike", this.id);
        console.log(`disike tweet`);
      }
    },
    handleLikeComment() {
      this.likeDislike = !this.likeDislike;
      if (this.likeDislike) {
        // this.$emit("likeComment", this.id);
        console.log(this.id);
        console.log(`like comment`);
      } else if (!this.likeDislike) {
        // this.$emit("unlike", this.id);
        console.log(this.id);
        console.log(`dislike comment`);
      }
    },
    onDelete() {
      this.$emit("deleteTweet", this.id);
    },
    addReply(ele, num) {
      console.log(`tes reply ${ele}, ${num}`);
      this.$emit("reply", ele, num);
    },
    handleShow() {
      this.showReply = !this.showReply;
      // this.$refs.input.blur();
    },
  },
  computed: {
    hasComment() {
      const comments = this.comments;
      return comments && comments.length > 0;
    },
  },
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

.card {
  margin: 16px 4px 4px 4px;
  padding: 4px;
  border-radius: 12px;
  background-color: #645caa;
}

.content {
  display: flex;
  /* justify-content: center; */
  background-color: #25316d;
  border-radius: 12px;
  padding: 12px;
  margin: 8px 8px 4px 8px;
}
.post-name {
  display: flex;
  align-items: center;
}
.name {
  padding-left: 12px;
}
.likeandretweet {
  display: flex;
  gap: 8px;
}

.reply {
  padding: 4px 8px;
}

.wrap-input {
  margin: 4px;
}

.reply-title {
  font-weight: 400;
  padding: 4px 16px;
  font-size: large;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  /* border: 1px solid black; */
}
</style>
