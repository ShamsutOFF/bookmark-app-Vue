import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API_ROUTES, client } from '@/api.ts';
import type { IBookmark } from '@/interfaces/IBookmark.ts';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get<IBookmark[]>(API_ROUTES.bookmarks(categoryId));
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
