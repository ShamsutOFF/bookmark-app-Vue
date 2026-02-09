<script setup lang="ts">
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import { onMounted, ref } from 'vue';
import { API_ROUTES } from '@/api.ts';
import type { ProfileInterface } from '@/interfaces/profile.interface.ts';

const profile = ref<ProfileInterface>({
  name: '',
});

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  profile.value = (await data.json()) as ProfileInterface;
}

onMounted(() => {
  console.log('App mounted');
  fetchProfile();
});
</script>

<template>
  <main>
    <div class="app">
      <nav class="nav">
        <ProfileAvatar :name="profile.name" />
      </nav>
      <main>Контент</main>
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
  min-width: 400px;
}
</style>
