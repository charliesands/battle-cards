<template>
  <div class="game">
    <h1>
      {{gameObject.players[0].name}}
    </h1>
  </div>

</template>

<script>
  export default {
    name: "game",
    data() {
      return {
        gameObject = {}
      }
    },
    computed: {
      gameObject() {
        return this.$store.state.gameObject;
      }
    },
    method: {

    }
  }
</script>