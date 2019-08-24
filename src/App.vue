<template>
  <div id="app">
    <!-- mutations -->
    <button @click="increment">+</button>
    <span>{{getCount}}</span>
    <button @click="decrement({amount:1})">-</button>
    <!-- <button @click="decrement(5)">-</button> -->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  // 简写
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     //调用mutations 里的 incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
};
</script>

<style>
</style>
