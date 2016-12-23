<template>
  <div>
    <header>
      <router-link to="./">&lsaquo; quit</router-link>
      <span>Round {{round}}</span><span></span>
    </header>
    <main>
      <player
        v-for="(player, index) in players"
        v-bind:player="player"
        v-bind:index="index"
      ></player>
    </main>
  </div>
</template>

<script>
import Player from './components/Player'

export default {
  name: 'overview',
  components: {
    Player
  },
  data () {
    return {
      players: []
    }
  },
  created () {
    this.players = JSON.parse(window.localStorage.getItem('players'))
    if (!this.players) {
      return this.$router.replace('./')
    }

    if (this.needsNewRound()) {
      this.addNewRound()
    }
  },
  computed: {
    round: function () {
      return this.players[0].rounds.length
    }
  },
  methods: {
    needsNewRound: function () {
      return this.players.filter(p => {
        const lastRound = p.rounds[p.rounds.length - 1]
        return !Number.isInteger(lastRound.blitz) || !Number.isInteger(lastRound.dutch)
      }).length === 0
    },
    addNewRound: function () {
      for (const p of this.players) {
        p.rounds.push({})
      }
      window.localStorage.setItem('players', JSON.stringify(this.players))
    }
  }
}
</script>
