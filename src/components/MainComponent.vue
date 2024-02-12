<template>
<div class="main-div">
  <DropdownList />
  <CreateButton />
</div>

</template>

<script setup lang="ts">
import DropdownList from './DropdownList.vue'
import CreateButton from './CreateButton.vue'
</script>

<style scoped>
.main-div{
  width: 500px;
  height: 500px;
}
</style>