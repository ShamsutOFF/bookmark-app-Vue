<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store.ts';
import { onMounted } from 'vue';
import ButtonIcon from '@/components/ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.ts'; // Явный импорт RouterLink

const store = useCategoryStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  store.fetchCategories();
});

function logout() {
  authStore.clearToken();
  router.push({ name: 'auth' });
}
</script>

<template>
  <ul class="category-list">
    <li class="category-list__item" v-for="category in store.categories" :key="category.id">
      <RouterLink
        active-class="router-link-active"
        :to="`/main/${category.alias}`"
        class="category-link"
      >
        {{ category.name }}
      </RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory()">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li class="category-list__item">
      <a class="category-link" href="#" @click="logout">Выход</a>
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

/* Стили для RouterLink */
.category-link {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: var(--color-fg);
  display: block; /* Чтобы работали отступы и hover */
}

.category-link:hover {
  font-size: 24px;
  font-weight: 700;
}

/* Активная ссылка (текущая страница) */
.category-link.router-link-active {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-fg); /* Можно задать другой цвет для активной ссылки */
}

/* Точное совпадение пути */
.category-link.router-link-exact-active {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-fg);
}
</style>
