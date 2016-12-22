<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <welcome></welcome>
    <div>
      Players

      <div
        is="player"
        v-for="(player, index) in players"
        v-bind:player="player"
        v-on:removePlayer="players.splice(index, 1)">
      </div>
      <button v-on:click="addPlayer">Add a player</button>
    </div>
    <button v-on:click="start" v-bind:disabled="!canStart">Start</button>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Player from './components/Player'

export default {
  name: 'app',
  components: {
    Welcome, Player
  },
  data () {
    return {
      state: 'stopped',
      players: [{name: ''}, {name: ''}]
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
      this.state = 'started'
      console.log(this.players)
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
