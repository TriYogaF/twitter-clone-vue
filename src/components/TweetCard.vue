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
          <span v-if="tweet" class="iconStyle">
            <Icon :name="'iconLike'" @like="handleLike" :id="this.id" />
            {{ this.tweet.like }}
          </span>
          <span v-else-if="reply" class="iconStyle">
            <Icon :name="'iconLike'" @likeComment="handleLikeComment" :id="this.id" />
            {{ this.reply.like }}
          </span>
          <span v-if="tweet" class="iconStyle">
            <Icon :name="'retweet'" @retweet="handleRetweet" :id="this.id" />
            {{ this.tweet.retweet }}
          </span>
          <span v-else-if="reply" class="iconStyle">
            <Icon :name="'retweet'" @retweet="handleRetweetComment" :id="this.id" />
            {{ this.reply.retweet }}
          </span>

          <Icon :name="this.user.username" @delete="onDelete" :id="this.id" />
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
import Icon from "./Icons/Icon.vue";
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
  components: { Avatar, Icon },
  emits: ["retweet", "deleteTweet", "like", "unlike", "reply", "close", "likeComment"],
  methods: {
    handleRetweet() {
      this.$emit("retweet", this.id);
    },
    handleRetweetComment() {
      this.reply.retweet++;
    },
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
      if (this.reply) {
        this.likeDislike = !this.likeDislike;
        if (this.likeDislike) {
          // this.$emit("likeComment", this.id);
          console.log(this.reply.like++);
        } else if (!this.likeDislike) {
          // this.$emit("unlike", this.id);
          console.log(this.reply.like--);
        }
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

.iconStyle {
  display: flex;
  /* align-items: center; */
  gap: 6px;
}
</style>
