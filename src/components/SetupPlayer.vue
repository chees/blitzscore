<template>
  <div>
    <input v-model="player.name">
    <button v-on:click="$emit('removePlayer')">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'setupPlayer',
  props: ['player']
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
input {
  flex-grow: 1;
  margin-right: 10px;
}
</style>
