import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectStore = defineStore('select', () => {
  const show = ref(false)

  const options = ref([
    {
      id: 1,
      option: 'Не выбрано'
    },
    {
      id: 2,
      option: 'Сделка'
    },
    {
      id: 3,
      option: 'Контакт'
    },
    {
      id: 4,
      option: 'Компания'
    }
  ])

  const selected = 'Не выбрано'

  return { show, options, selected }
})
