<template>
  <div class="wrap-input">
    <textarea ref="input" v-model="tweet" name="input" id="input"></textarea>
    <div class="ket">
      <span>{{ this.tweet.length }}/10</span>
      <div class="button-group">
        <button v-if="inputReply">Cancel</button>
        <button :disabled="this.tweet.length > 10 ? true : false" type="submit" @click="handleSubmit">Tweet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweet: "",
      btnDisabled: true,
      // inputReply: false,
    };
  },
  props: {
    id: Number,
    addData: Function,
    inputReply: Boolean,
  },
  methods: {
    handleSubmit() {
      this.addData(this.tweet, this.id);
      // console.log(this.$refs.input.value);
      this.tweet = "";
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<style>
.wrap-input {
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 12px;
}
textarea {
  display: block;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  padding: 4px;
}
.ket {
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
}

button {
  margin-inline-start: 6px;
}
/* .disable {
  background-color: gray;
} */
</style>
