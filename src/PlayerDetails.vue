<template>
  <div>
    <header>
      <router-link to="../overview">&lsaquo; overview</router-link>
      <span>{{player.name}}</span><a @click="next">next &rsaquo;</a>
    </header>
    <main>
      <table>
        <tr><th>Blitz</th><th>* -2</th><th>Dutch</th><th>Total</th></tr>
        <tr v-for="round in player.rounds">
          <td><input type="number" v-model="round.blitz" v-on:input="save"></td>
          <td>{{round | minusBlitz}}</td>
          <td><input type="number" v-model="round.dutch" v-on:input="save"></td>
          <td>{{round | roundTotal}}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>{{total}}</td>
        </tr>
      </table>
    </main>
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
    },
    next: function () {
      this.$router.replace('' + (Number.parseInt(this.$route.params.index, 10) + 1) % this.players.length)
    }
  },
  filters: {
    minusBlitz: function (round) {
      const n = round.blitz * -2
      return isNaN(n) ? '' : n
    },
    roundTotal: function (round) {
      const total = round.blitz * -2 + round.dutch
      return isNaN(total) ? '' : total
    }
  }
}
</script>

<style scoped>
header * {
  /* flex-grow: 1; */
  width: 33%;
}
header span {
  text-align: center;
}
header :last-child {
  text-align: right;
}
table {
  width: 100%;
  padding: 10px;
}
th {
  border-bottom: 1px solid #2c3e50;
  min-width: 30px;
}
td {
  text-align: right;
}
td input {
  box-sizing: border-box;
  width: 100%;
  text-align: right;
}
tr:last-child td:last-child {
  border-top: 1px solid #2c3e50;
  font-weight: bold;
}
</style>
