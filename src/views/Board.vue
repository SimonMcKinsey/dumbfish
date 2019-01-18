<template>
    <div class="board-container">
        <div 
        :style="{ background: index % 2 === 0 ? 'green' : 'white'}"
        class="board-container__cell"
        v-for="(cell, index) in 64" :key="index">
            CELL
        </div>
    </div>
</template>


<script lang="ts">
import Vue from "vue";

// const cells: number[][] = [];

export default Vue.extend({
  data() {
    return {
      //   chessCells: cells
    };
  },
  methods: {},
  computed: {}
});
</script>

<style lang="scss" scoped>
.board-container {
  height: 80vh;
  width: 80vh;
  border: 0.1rem solid brown;
  margin: auto;
  margin-top: 3.5rem;
  display: flex;
  flex-wrap: wrap;

  &__cell {
    width: 10vh;
    height: 10vh;
    display: flex;
    align-items: center;
  }
}
</style>
