<template>
  <div>
    <player
      v-for="(player, index) in players"
      v-bind:player="player"
      v-bind:index="index"
    ></player>
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
  }
}
</script>
