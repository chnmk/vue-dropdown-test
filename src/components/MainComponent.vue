<template>
  <div class="container">
    <div class="sidebar">
      <DropdownList />
      <CreateButton />
    </div>
    <div class="entites">Sample Text</div>
  </div>
</template>

<script setup lang="ts">
import DropdownList from './DropdownList.vue'
import CreateButton from './CreateButton.vue'
</script>

<style scoped>
.container {
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  
}
.sidebar {
  min-width: 500px;
  min-height: 250px;
}

.entites {
}
</style>
