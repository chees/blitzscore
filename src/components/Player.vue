<template>
  <div class="box" v-on:click="details">
    {{player.name}}
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['player', 'index'],
  methods: {
    details: function () {
      this.$router.push('player/' + this.index)
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #2c3e50;
  margin: 10px;
  padding: 20px;
}
</style>
