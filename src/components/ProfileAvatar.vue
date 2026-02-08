<script setup lang="ts">
const {name} = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="profile-avatar">
    <img src="../../public/avatar.png" class="profile-avatar__img" alt="Avatar"/>
    <div>Привет, <strong>{{ name }}!</strong></div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
}

.profile-avatar__img {
  width: 80px;
  height: 80px;
}
</style>
