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

  async function createCategory() {
    const { data } = await http.post<ICategory>(API_ROUTES.categories,{
      name: 'Новая категория',
      alias: 'new-category',
    });
    categories.value.push(data);
  }

  return { categories, fetchCategories, createCategory };
});
