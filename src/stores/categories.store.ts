import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';
import axios from 'axios';
import { API_ROUTES } from '@/api.ts';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([]);
  async function fetchCategories() {
    const { data } = await axios.get<ICategory[]>(API_ROUTES.categories);
    categories.value = data;
  }
  return { categories, fetchCategories };
});
