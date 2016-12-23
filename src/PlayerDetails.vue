<template>
  <div>
    <router-link to="../overview">&lt; Overview</router-link>
    {{player.name}}: {{total}}
    <table>
      <tr><th>Blitz</th><th>* -2</th><th>Dutch</th><th>Total</th></tr>
      <tr v-for="round in player.rounds">
        <td><input type="number" v-model="round.blitz" v-on:input="save"></td>
        <td>{{round | minusBlitz}}</td>
        <td><input type="number" v-model="round.dutch" v-on:input="save"></td>
        <td>{{round | roundTotal}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'playerDetails',
  data () {
    return {
      players: [],
      total: 0
    }
  },
  created () {
    this.players = JSON.parse(window.localStorage.getItem('players'))
    if (!this.players) {
      return this.$router.replace('../')
    }
    this.updateTotal()
  },
  computed: {
    player: function () {
      return this.players[this.$route.params.index] || {}
    }
  },
  methods: {
    save: function () {
      window.localStorage.setItem('players', JSON.stringify(this.players))
      this.updateTotal()
    },
    updateTotal: function () {
      this.total = this.player.rounds.reduce(function (acc, round) {
        return acc + (round.blitz || 0) * -2 + (round.dutch || 0)
      }, 0) || 0
    }
  },
  filters: {
    minusBlitz: function (round) {
      return round.blitz * -2 || ''
    },
    roundTotal: function (round) {
      const total = round.blitz * -2 + round.dutch
      return isNaN(total) ? '' : total
    }
  }
}
</script>

<style scoped>
table {
  width: 100%
}
th {
  border-bottom: 1px solid black;
}
</style>
