<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts';
import { onMounted } from 'vue';

const store = useCategoryStore();
onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="category-list">
    <li class="category-list__item" v-for="category in store.categories" :key="category.id">
      <a :href="`/${category.alias}`">{{ category.name }} </a>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.category-list__item {
  list-style: none;
}

.category-list__item a {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: var(--color-bg);
}
.category-list__item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
