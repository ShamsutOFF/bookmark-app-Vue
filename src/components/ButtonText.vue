<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-fg);
  cursor: pointer;
  border-radius: 50px;
  height: 50px;
  padding: 12px 24px;
  border: none;
  color: var(--color-bg);
  font-size: 18px;
}
.button:hover {
  background: var(--color-fg-hover);
}
</style>
