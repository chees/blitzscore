<template>
  <div class="player" v-on:click="details">
    <div class="name">{{player.name}}</div>
    <div class="total">{{total}}</div>
    <div class="status">
      <span>Blitz: {{lastBlitz}}</span>
      <span>Dutch: {{lastDutch}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['player', 'index'],
  computed: {
    total: function () {
      return this.player.rounds.reduce(function (acc, round) {
        return acc + (round.blitz || 0) * -2 + (round.dutch || 0)
      }, 0) || 0
    },
    lastBlitz: function () {
      return this.player.rounds[this.player.rounds.length - 1].blitz
    },
    lastDutch: function () {
      return this.player.rounds[this.player.rounds.length - 1].dutch
    }
  },
  methods: {
    details: function () {
      this.$router.push('player/' + this.index)
    }
  }
}
</script>

<style scoped>
.player {
  border: 1px solid #2c3e50;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px;
  position: relative;
}
.player:active {
  background-color: #ddd;
}
.name {
  font-weight: bold;
  margin-bottom: 10px;
}
.total {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #2c3e50;
  color: white;
  width: 40px;
  height: 40px;
  border-bottom-left-radius: 4px;
  text-align: center;
  line-height: 40px;
}
.status {
  display: flex;
}
.status span {
  width: 50%;
}
</style>
