<template>
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
  emits: ["retweet", "delete"],
  props: {
    name: String,
    id: Number,
  },
};
</script>

<style>
svg:hover {
  cursor: pointer;
}
</style>
