<template>
  <div>
    <player v-for="player in players" v-bind:player="player"></player>
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
    const players = JSON.parse(window.localStorage.getItem('players'))
    if (!players) {
      this.$router.replace('./')
    }
    this.players = players
  }
}
</script>
