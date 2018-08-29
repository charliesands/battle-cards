<template>
  <div class="game">
    <player></player>
    <enemy></enemy>
  </div>

</template>

<script>
  import Player from '../components/Player'
  import Enemy from '../components/Enemy'
  export default {
    name: "game",
    computed: {
      gameObject() {
        return this.$store.state.gameObject;
      }
    },
    method: {

    },
    components: {
      Player,
      Enemy
    }
  }
</script>