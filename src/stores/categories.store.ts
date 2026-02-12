import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';
import { API_ROUTES, client } from '@/api.ts';
import { v4 as uuidv4 } from 'uuid';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([]);

  async function fetchCategories() {
    const { data } = await client().get<ICategory[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await client().post<ICategory>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  function getCategoryByAlias(alias: string | string[] | undefined): ICategory | undefined {
    if (!alias) return undefined;

    const aliasStr = Array.isArray(alias) ? alias[0] : alias;
    return categories.value.find((c) => c.alias === aliasStr);
  }

  return { categories, fetchCategories, createCategory, getCategoryByAlias };
});
