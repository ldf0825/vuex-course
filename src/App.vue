<template>
  <div id="app">
    <!-- mutations -->
    <button @click="incrementCountAsync">+</button>
    <span>{{getCount}}</span>
    <button @click="decrementCountAsync({amount:1})">-</button>
    <!-- <button @click="decrement(5)">-</button> -->

    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchData</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // 简写
  // methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   incrementCount() {
  //     //触发actions
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     //触发actions
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
};
</script>

<style>
</style>
