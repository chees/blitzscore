<template>
  <div class="box" v-on:click="details">
    {{player.name}}: {{total}}
    <div>
      Blitz: {{lastBlitz}}
      Dutch: {{lastDutch}}
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
.box {
  border: 1px solid #2c3e50;
  margin: 10px 0;
  padding: 20px;
}
</style>
