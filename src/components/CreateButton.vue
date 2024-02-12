<template>
        <button class="button" v-if="selectStore.selected !== 'Не выбрано'">
        Создать
    </button>
    <button class="button--disabled" v-if="selectStore.selected === 'Не выбрано'">
        Создать
    </button>

</template>

<script setup lang="ts">
import { useSelectStore } from '@/stores/select'
const selectStore = useSelectStore()
</script>

<style scoped>
.button {
    vertical-align: top;
    margin-top: 1.15rem;
    padding: 7px 10px;
    font-weight: 600;
    border: 1px solid #dbdedf;
    border-radius: 4px;
    font-stretch: 90%;
    background-color: #4c8bf7;
    color: white;
    
}

.button:hover {
    background-color: darkblue;
    cursor: pointer;
}

.button--disabled {
    vertical-align: top;
    margin-top: 1.15rem;
    padding: 7px 10px;
    font-weight: 600;
    border: 1px solid #dbdedf;
    border-radius: 4px;
    font-stretch: 90%;
    background-color: #fcfcfc;
}

.button--disabled:hover {
    background-color: whitesmoke;
}
</style>