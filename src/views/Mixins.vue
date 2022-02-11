<template>
  <div class="counter-mixins">
    <h1>This is an counter page with mixins</h1>
    <p>Count {{ counter }}</p>
    <p>Previous Count {{ prevCounter }}</p>
    <button @click="plus">+</button> &nbsp;
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";

import CounterMixins from "../mixins/counter";

export default mixins(CounterMixins).extend({
  name: "Counter",
  mixins: [CounterMixins],
  data() {
    return {
      counter: 2,
    };
  },
  created() {
    // where this is come from? ...
    // will take a look
    // ah this is from CounterMixins
    console.log(this.counter);
  },
});
</script>
