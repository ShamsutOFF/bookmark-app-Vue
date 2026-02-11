<script setup lang="ts"></script>

<template>
  <div class="index">
    <h1 class="index__title">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__description">
      Чтобы начать пользоваться выберите категорию закладок или создайте новую.
    </p>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-height: 50vh;
}
.index__title {
  font-size: 24px;
  font-weight: 500;
}
.index__description {
  font-size: 16px;
}
</style>
