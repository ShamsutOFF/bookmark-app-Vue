<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import CategoryList from '@/components/CategoryList.vue';
</script>

<template>
  <main>
    <div class="app">
      <nav class="nav">
        <ProfileAvatar />
        <CategoryList />
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </main>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 150px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  min-width: 320px;
}
</style>
