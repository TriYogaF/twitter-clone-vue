<template>
  <svg v-if="name == 'iconLike' && this.like == false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLike">
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"
    />
  </svg>

  <svg v-if="name == 'iconLike' && this.like == true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="handleLike">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z" />
  </svg>

  <svg v-if="name == 'retweet'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="$emit('retweet', id)">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
      fill="rgba(0,0,0,1)"
    />
  </svg>

  <svg v-if="name == '@triyogaf'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="$emit('delete', id)">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
  </svg>
</template>

<script>
export default {
  data() {
    return {
      like: false,
    };
  },
  emits: ["retweet", "like", "delete", "likeComment"],
  props: {
    name: String,
    id: Number,
  },
  methods: {
    handleLike() {
      this.like = !this.like;
      this.$emit("like", this.id);
      this.$emit("likeComment", this.id);
      //   console.log(`icon`);
    },
  },
};
</script>

<style></style>
