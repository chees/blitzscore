<template>
  <div>
    <!--<img src="./assets/logo.png">-->
    <welcome></welcome>
    Players
    <div
      is="setup-player"
      v-for="(player, index) in players"
      v-bind:player="player"
      v-on:removePlayer="players.splice(index, 1)">
    </div>
    <button v-on:click="addPlayer">Add a player</button>
    <button v-on:click="start" v-bind:disabled="!canStart">Start</button>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import SetupPlayer from './components/SetupPlayer'

export default {
  name: 'home',
  components: {
    Welcome, SetupPlayer
  },
  data () {
    return {
      players: [{name: 'Player 1'}, {name: 'Player 2'}]
    }
  },
  computed: {
    canStart: function () {
      return this.players.filter(p => p.name).length >= 2
    }
  },
  methods: {
    addPlayer: function () {
      this.players.push({name: ''})
    },
    start: function () {
      // TODO filter out players without a name
      window.localStorage.setItem('players', JSON.stringify(this.players))
      this.$router.push('overview')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
input {
  border: 1px solid #2c3e50;
}
button {
  border: 1px solid #2c3e50;
}
</style>
