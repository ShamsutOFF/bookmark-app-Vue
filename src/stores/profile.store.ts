import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ProfileInterface } from '@/interfaces/profile.interface.ts';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<ProfileInterface>();
  return { profile };
});
