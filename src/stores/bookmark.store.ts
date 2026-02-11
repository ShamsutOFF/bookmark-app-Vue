import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';
import { API_ROUTES, http } from '@/api.ts';
import { v4 as uuidv4 } from 'uuid';
import type { IBookmark } from '@/interfaces/IBookmark.ts';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks(categoryId));
    bookmarks.value = data;
  }

  // async function createBookmark() {
  //   const { data } = await http.post<IBookmark>(API_ROUTES.categories, {
  //     name: 'Новая категория',
  //     alias: uuidv4(),
  //   });
  //   categories.value.push(data);
  // }

  return { bookmarks, fetchBookmarks };
});
