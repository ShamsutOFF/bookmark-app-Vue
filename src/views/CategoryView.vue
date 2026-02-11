<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts';
import { onMounted, ref, watch } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';
import { useBookmarksStore } from '@/stores/bookmark.store.ts';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarksStore();
const category = ref<ICategory>();

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id);
  }
});
watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  },
);
</script>

<template>
  <div v-if="!category">Загрузка категории...</div>
  <div v-else-if="false">Категория не найдена</div>
  <div v-else>
    <h1>Категория: {{ category.name }}</h1>
    <h2>Закладки: {{ bookmarkStore.bookmarks }}</h2>
    <!-- контент категории -->
  </div>
</template>

<style scoped></style>
