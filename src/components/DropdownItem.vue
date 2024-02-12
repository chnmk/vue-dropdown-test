<template>
  <div class="dropdown__item">
    <a>
      <slot />
    </a>
  </div>
</template>

<style scoped>
.dropdown__item {
    width: 20rem;
  height: 2.5rem;
  padding: 0.5rem;
  color: #595959;
}

.dropdown__item:hover{
    cursor: pointer;
    background-color: whitesmoke;
}
</style>
