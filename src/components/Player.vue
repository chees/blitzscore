<template>
  <div class="player" v-on:click="details">
    <div class="name">{{player.name}}</div>
    <div class="total" v-bind:class="{ highest: isHighest }">{{total}}</div>
    <div class="status">
      <span v-bind:class="{ invisible: isBlitzInvisible }">Blitz: {{lastBlitz}}</span>
      <span v-bind:class="{ invisible: isDutchInvisible }">Dutch: {{lastDutch}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['player', 'index', 'players'],
  computed: {
    total: function () {
      return this.getTotal(this.player)
    },
    isHighest: function () {
      return this.total > 0 && this.total === Math.max(...this.players.map(this.getTotal))
    },
    lastBlitz: function () {
      return this.player.rounds[this.player.rounds.length - 1].blitz
    },
    lastDutch: function () {
      return this.player.rounds[this.player.rounds.length - 1].dutch
    },
    isBlitzInvisible: function () {
      return !Number.isInteger(this.lastBlitz)
    },
    isDutchInvisible: function () {
      return !Number.isInteger(this.lastDutch)
    }
  },
  methods: {
    details: function () {
      this.$router.push('player/' + this.index)
    },
    getTotal: function (player) {
      return player.rounds.reduce(function (acc, round) {
        return acc + (round.blitz || 0) * -2 + (round.dutch || 0)
      }, 0) || 0
    }
  }
}
</script>

<style scoped>
.player {
  border: 1px solid #2c3e50;
  margin-bottom: 10px;
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
.total.highest {
  animation-name: scale;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  transform-origin: top right;
}
@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
.status {
  display: flex;
}
.status span {
  width: 50%;
}
.invisible {
  visibility: hidden;
}
</style>
