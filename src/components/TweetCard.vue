<template>
  <div class="card">
    <div class="content">
      <div class="post">
        <div class="post-name">
          <Avatar :avatar="item.user.avatarUrl" :class="hasComment ? 'tweetAvatar' : 'commentAvatar'" />
          <p class="name">{{ item.user.fullname }} {{ item.user.username }}</p>
        </div>
        <p>{{ item.tweet.content }}</p>
        <div class="likeandretweet">
          <span class="iconStyle">
            <component :is="currentIcon" @click="handleLike"></component>
            {{ item.tweet.like }}
            <Icon :name="'retweet'" @retweet="handleRetweet" :id="item.id" />
            {{ item.tweet.retweet }}
            <Icon :name="item.user.username" @delete="onDelete" :id="item.id" />
          </span>
        </div>
      </div>
    </div>
    <div v-if="hasComment" class="reply">
      <!-- <KeepAlive> -->
      <TweetInput ref="input" v-if="showReply" :inputReply="true" :id="this.item.id" @addInput="addReply" @closeInput="handleShow" />
      <p class="reply-title" v-else @click="handleShow">Reply</p>
      <!-- </KeepAlive> -->
    </div>
    <div v-if="hasComment" class="comment">
      <TweetCard v-for="child in item.comments" :key="child.id" :item="child" @deleteTweetComment="onDeleteComment" />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Icon from "./Icons/Icon.vue";
import like from "./Icons/like.vue";
import dislike from "./Icons/dislike.vue";
export default {
  data() {
    return {
      temp: "asdasd",
      like: false,
      likeDislike: false,
      showReply: false,
      currentIcon: "dislike",
      icons: ["dislike", "like"],
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: { Avatar, Icon, like, dislike },
  emits: ["retweet", "deleteTweet", "like", "unlike", "reply", "close", "likeComment", "deleteTweetComment"],
  methods: {
    handleRetweet() {
      if (this.hasComment) {
        this.$emit("retweet", this.item.id);
      } else {
        this.reply.retweet++;
      }
    },
    handleLike() {
      this.currentIcon == "dislike" ? (this.currentIcon = "like") : (this.currentIcon = "dislike");
      if (this.hasComment) {
        if (this.currentIcon == "like") {
          this.$emit("like", this.item.id);
        } else this.$emit("unlike", this.item.id);
      } else {
        if (this.currentIcon == "like") {
          this.item.tweet.like++;
        } else {
          this.item.tweet.like--;
        }
      }
    },
    onDelete() {
      if (this.hasComment) {
        this.$emit("deleteTweet", this.item.id);
        console.log(this.item.id);
      } else {
        this.$emit("deleteTweetComment", this.item.id);
        console.log(this.item.id);
      }
    },
    onDeleteComment(e) {
      this.item.comments.splice(
        this.item.comments.findIndex((item) => item.id == e),
        1
      );
    },
    addReply(ele, num) {
      console.log(`tes reply ${ele}, ${num}`);
      this.$emit("reply", ele, num);
    },
    handleShow(e) {
      this.showReply = !this.showReply;
      this.temp = e;
      console.log(e);
    },
  },
  computed: {
    hasComment() {
      const { comments } = this.item;
      return comments && comments.length >= 0;
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
}

.iconStyle {
  display: flex;
  gap: 6px;
}
</style>
