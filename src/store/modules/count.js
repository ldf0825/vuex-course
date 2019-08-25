const state = {
    count: 0,

};
const getters = {
    getCount: state => state.count,
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, n) => state.count -= n.amount,
};
const actions = {
    incrementCountAsync: ({ commit }) => {
        setTimeout(() => {

            commit("incrementCount")
        }, 500)
    },
    decrementCountAsync: (context, payload) => {
        setTimeout(() => {
            context /* = this.$store*/.commit("decrementCount", payload)
        }, 1000)
    },
};

export default {
    state, getters, mutations, actions
}