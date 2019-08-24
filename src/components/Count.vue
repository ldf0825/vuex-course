<template>
  <div id="Count">{{count}}</div>
</template>

<script>
export default {
  name: "app",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
