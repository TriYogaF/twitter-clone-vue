<template>
  <div class="wrap-input">
    <textarea ref="input" v-model="tweet" name="input" id="input"></textarea>
    <div class="ket" @click="this.tweet.length <= 0 ? $emit('closeInput') : ''">
      <span>{{ this.tweet.length }}/10</span>
      <div class="button-group">
        <button v-if="inputReply" @click="this.tweet.length > 0 ? $emit('closeInput') : ''">Cancel</button>
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
  emits: ["addInput", "closeInput"],
  props: {
    id: Number,
    // addData: Function,
    inputReply: Boolean,
  },
  methods: {
    handleSubmit() {
      this.$emit("addInput", this.tweet, this.id);
      this.tweet = "";
    },
    // handleClose() {
    //   if (this.tweet.length > 0) {
    //     this.$emit("cancelButton");
    //   } else this.$emit("closeInput");
    //   console.log(this.tweet.length);
    // },
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
  resize: vertical;
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
