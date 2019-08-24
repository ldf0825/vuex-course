<template>
  <div id="app">
    app.Vue{{count}}
    {{todos}}
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },
  // 写法三
  // computed: mapState(["count","todos"]),
  // 写法二
  // computed: mapState({
  //   // count:state => state.count,
  //   count: function(state) {
  //     return state.count;
  //   }
  // })

  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style>
</style>
