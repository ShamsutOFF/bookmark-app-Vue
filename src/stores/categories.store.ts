import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';
import { API_ROUTES, http } from '@/api.ts';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([]);
  async function fetchCategories() {
    const { data } = await http.get<ICategory[]>(API_ROUTES.categories);
    categories.value = data;
  }
  return { categories, fetchCategories };
});
