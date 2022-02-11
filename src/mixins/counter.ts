import Vue from "vue";

export default Vue.extend({
  name: "CounterMixins",
  data() {
    return {
      counter: 0,
      prevCounter: 0,
    };
  },
  watch: {
    counter: {
      handler(newVal: number, prevVal: number) {
        this.prevCounter = prevVal;
      },
    },
  },
  methods: {
    /**
     * plus
     * =
     * purpose
     * -
     * plus one to existing counter
     */
    plus(): void {
      this.counter += 1;
    },
    /**
     * minus
     * =
     * purpose
     * -
     * minus one to existing counter
     */
    minus(): void {
      this.counter -= 1;
    },
  },
});
