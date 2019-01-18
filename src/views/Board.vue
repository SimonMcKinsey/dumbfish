<template>
    <div class="board-container">
        <div v-for="(row, index1) in initBoard" :key="index1" class="board-container__row">
            <div 
            :style="{ background: color()[index1][index2] === 1 ? 'green' : 'white'}"
            @click="onPieceClick(index1, index2)"
            class="board-container__row--cell"
            v-for="(cellValue, index2) in row" :key="index2">
             <img class="board-container__row--cell__image" v-if="index1 < 2"
             :src="cellValue !== 0 ? require('@/assets/pieces/' + whiteMapper.get(cellValue)) : ''" />
             <img class="board-container__row--cell__image" v-if="index1 > 5"
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
  methods: {
    onPieceClick(i1: number, i2: number) {
      console.log(i1, i2);
    }
  },
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

  &__row {
    display: flex;
    width: 100%;
    height: 10vh;

    &--cell {
      min-width: 12.5%;
      min-height: 10vh;

      &__image {
        height: 90%;
        width: 90%;
        cursor: pointer;
      }
    }
  }
}
</style>
