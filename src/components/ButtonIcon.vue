<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon" :style="{ width: size + 'px', height: size + 'px' }">
    <slot />
  </button>
</template>

<style scoped>
.button-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-bg);
  cursor: pointer;
  border-radius: 50px;
  border: none;
}
.button-icon:hover {
  background: var(--color-fg-hover);
}
</style>
