<template>
  <div class="wrap-input">
    <textarea v-model="tweet" name="input" id="input"></textarea>
    <div class="ket">
      <span>{{ this.tweet.length }}/10 | {{ this.tweet }}</span>
      <button :class="this.tweet.length > 10 ? 'disable' : ''" type="submit" @click="$emit('tweet', tweet)">Tweet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweet: "",
    };
  },
};
</script>

<style>
.wrap-input {
  border: 2px solid black;
  border-radius: 12px;
  padding: 12px;
}
textarea {
  display: block;
  width: 100%;
  height: 100px;
  border-radius: 8px;
}
.ket {
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
}

.disable {
  background-color: gray;
}
</style>
