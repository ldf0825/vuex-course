<template>
  <div id="app">
    <p>{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById}}</p>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: { Count },
  // computed: mapGetters([
  //   "count",
  //   "completedTodos",
  //   "completedTodosCount",
  //   "getTodosById"
  // ]),
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
    completedTodos() {
      return this.$store.getters.completedTodos;
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount;
    },
    getTodosById() {
      return this.$store.getters.getTodoById;
    }
  }
};
</script>

<style>
</style>
