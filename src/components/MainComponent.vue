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
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
.sidebar {
  width: 500px;
  height: 100px;
}

.entites {
  color: red;
}
</style>
