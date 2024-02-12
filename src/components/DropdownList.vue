<template>
  <div class="dropdown">
    <div @click="selectStore.show = !selectStore.show">
    <span class="dropdown__arrow" />
    <div class="dropdown__selected" >
      {{ selectStore.selected }}
    </div>
  </div>
    <div v-if="selectStore.show">
      <div class="dropdown__containter">
      <DropdownItem v-for="option in selectStore.options" :key="option.id"  @click="dropdownSelect(option.option)">
        <span class="dropdown_check" v-if="option.option === selectStore.selected" />
        <span class="dropdown_check--disabled" v-if="option.option !== selectStore.selected" />
        {{ option.option }}
      </DropdownItem>
    </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import DropdownItem from './DropdownItem.vue'

import { useSelectStore } from '@/stores/select'
const selectStore = useSelectStore()

function dropdownSelect(selectedOnClick: string) {
    selectStore.show = false
    selectStore.selected = selectedOnClick
}
</script>

<style scoped>
.dropdown {
  width: 20rem;
  height: 2.5rem;
  background-color: whitesmoke;
  border: 1px solid lightgray;
  border-bottom: 2px solid lightgray;
  border-radius: 3px;
}

.dropdown:hover{
    cursor: pointer;
}

.dropdown__arrow {
  float: right;
  display: block;
  border: solid #595959;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);  
  padding: 0.25rem;
  margin-top: 0.8rem;
  margin-right: 0.7rem;
}

.dropdown_check {
  display: inline-block;
  transform: rotate(45deg);
  width: 0.4rem;
  height: 0.8rem;
  border-bottom:2px solid gray;
  border-right: 2px solid gray;
  margin-left: 0.2rem;
  margin-right: 0.4rem;
}

.dropdown_check--disabled {
  margin-right: 1.2rem;
}

.dropdown__selected {
  width: 18rem;
  height: 3rem;
  padding: 0.45rem;
  color: #595959;
}

.dropdown__containter {
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
}


</style>
