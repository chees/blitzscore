<template>
  <div class="home">
    <!--<img src="./assets/logo.png">-->
    <welcome></welcome>
    <div
      is="setup-player"
      v-for="(player, index) in players"
      v-bind:player="player"
      v-on:removePlayer="players.splice(index, 1)">
    </div>
    <button v-on:click="addPlayer" class="add">Add a player</button>
    <button v-on:click="start" v-bind:disabled="!canStart" class="start">Start</button>
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
      players: [
        {name: 'Player 1', rounds: [{}]},
        {name: 'Player 2', rounds: [{}]}]
    }
  },
  computed: {
    canStart: function () {
      return this.players.filter(p => p.name).length >= 2
    }
  },
  methods: {
    addPlayer: function () {
      this.players.push({name: '', rounds: [{}]})
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
body {
  margin: 0;
  padding: 0;
  overflow-y: hidden; /* To prevent android pull to reload */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2c3e50;
}
header {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  font-weight: bold;
  display: flex;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
}
header * {
  width: 33%;
  padding: 10px;
}
header span {
  text-align: center;
}
header :last-child {
  text-align: right;
}
header a {
  color: white;
  text-decoration: none;
  background-color: rgba(255, 255, 255, .1);
}
header a:active {
  background-color: white;
  color: #2c3e50;
}
main {
  padding-top: 62px;
}
input {
  -webkit-appearance: none;
  border-radius: 3px;
  border: 1px solid #ddd;
  background-color: #fafafa;
  font-size: 16px;
  padding: 6px;
}
input:focus {
  outline: none;
  background-color: #eee;
}
button {
  outline: none;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  font-size: 16px;
  padding: 6px 10px;
  background-color: #2c3e50;
  color: white;
}
button:active {
  background-color: white;
  color: #2c3e50;
}
</style>
<style scoped>
.home {
  padding: 10px;
}
.add {
  margin: 10px 0 20px;
}
.start {
  width: 100%;
  margin: 20px 0;
  padding: 10px;
}
</style>
