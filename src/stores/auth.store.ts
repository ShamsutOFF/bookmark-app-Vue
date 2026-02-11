import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IProfile } from '@/interfaces/IProfile.ts';
import { API_ROUTES, http } from '@/api.ts';
import type { LoginResponse } from '@/interfaces/IAuth.ts';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  async function login(email: string, password: string) {
    const { data } = await http.post<LoginResponse>(API_ROUTES.auth.login, {
      email: email,
      password: password,
    });
    token.value = data.token;
  }
  return { token, login };
});
