<script setup lang="ts">
</script>

<template>
  <main>
    <div class="app">
      <nav class="nav">
        Меню
      </nav>
      <main>
        Контент
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
  min-width: 400px;
}
</style>
