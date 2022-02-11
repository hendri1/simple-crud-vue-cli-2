<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <p>Count {{ counter }}</p>
    <p>Previous Count {{ prevCounter }}</p>
    <button @click="plus">+</button> &nbsp;
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Counter",
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
</script>
