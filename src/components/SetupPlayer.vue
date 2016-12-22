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
