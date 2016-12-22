<template>
  <div>
    <input v-model="player.name">
    <button v-on:click="$emit('removePlayer')">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['player']
}
</script>

<style scoped>
</style>
