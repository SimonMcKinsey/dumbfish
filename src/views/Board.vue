<template>
    <div class="board-container">
        <div v-for="(column, index1) in initBoard" :key="index1">
            <div 
            :style="{ background: color()[index1][index2] === 1 ? 'green' : 'white'}"
            class="board-container__cell"
            v-for="(cellValue, index2) in column" :key="index2">
             <img class="board-container__cell--image" v-if="index1 < 2"
             :src="cellValue !== 0 ? require('@/assets/pieces/' + whiteMapper.get(cellValue)) : ''" />
             <img class="board-container__cell--image" v-if="index1 > 5"
             :src="cellValue !== 0 ? require('@/assets/pieces/' + blackMapper.get(cellValue)) : ''" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from "vue";
import boardInitiator from "../utils/BoardInitiator";
// const cells: number[][] = [];

export default Vue.extend({
  data() {
    return {
      whiteMapper: boardInitiator.whiteMapper,
      blackMapper: boardInitiator.blackMapper,
      color: boardInitiator.boardBackgroundColors
      //   chessCells: cells
    };
  },
  methods: {},
  computed: {
    initBoard: boardInitiator.init
  }
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

  &__cell {
    width: 10vh;
    height: 10vh;

    &--image {
        height: 90%;
        width: 90%;
        cursor: pointer;
    }
  }
}
</style>
