<template>
  <div class="wrap-input">
    <form ref="form" @submit.prevent="handleSubmit">
      <textarea ref="input" :value="tweet" name="input" id="input" @input="$emit('update:tweet', $event.target.value)" @blur="handleBlur"></textarea>
      <div class="ket">
        <span>{{ this.tweet.length }}/10</span>
        <div class="button-group">
          <button type="button" @click="handleBlurCancel" v-if="inputReply">Cancel</button>
          <button :disabled="this.tweet.length > 10 ? true : false" type="submit">Tweet</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tweet: "",
      btnDisabled: true,
    };
  },
  emits: ["addInput", "closeInput", "update:tweet", "blur", "blurCancel"],
  props: {
    id: Number,
    inputReply: Boolean,
    tweet: String,
  },
  methods: {
    handleBlurCancel() {
      this.$emit("blurCancel");
    },
    handleBlur() {
      this.$emit("blur", this.tweet);
    },
    handleSubmit() {
      this.$emit("addInput", this.tweet, this.id);
      this.$refs.form.reset();
      this.$emit("blurCancel");
    },
  },
  mounted() {
    this.$refs.input.focus();
  },

  // updated() {
  //   this.$refs.input.focus();
  //   console.log(this.tweet);
  // },
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

button:hover {
  cursor: pointer;
}
/* .disable {
  background-color: gray;
} */
</style>
