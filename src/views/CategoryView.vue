<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories.store.ts';
import { ref, watch } from 'vue';
import type { ICategory } from '@/interfaces/ICategory.ts';

const route = useRoute();
const state = useCategoryStore();
const category = ref<ICategory>();

watch(
  () => state.categories,
  () => {
    category.value = state.getCategoryByAlias(route.params.alias);
  },
);

onBeforeRouteUpdate((to) => {
  category.value = state.getCategoryByAlias(to.params.alias);
});
</script>

<template>
  <div v-if="!category">Загрузка категории...</div>
  <div v-else-if="false">Категория не найдена</div>
  <div v-else>
    <h1>Категория: {{ category.name }}</h1>
    <!-- контент категории -->
  </div>
</template>

<style scoped></style>
