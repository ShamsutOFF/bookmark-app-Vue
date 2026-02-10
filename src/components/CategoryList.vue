<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts';
import { onMounted } from 'vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';

const store = useCategoryStore();
onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="category-list">
    <li class="category-list__item" v-for="category in store.categories" :key="category.id">
      <RouterLink :to="`/main/${category.alias}`">{{ category.name }} </RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory()">
        <IconPlus />
      </ButtonIcon>
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

.category-list li {
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
