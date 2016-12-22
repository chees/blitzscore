<template>
  <div class="box">
    {{player.name}}
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['player']
}
</script>

<style scoped>
.box {
  border: 1px solid #2c3e50;
  margin: 10px;
  padding: 20px;
}
</style>
