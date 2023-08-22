<template>
  <div>
    <h2>Список картин Ульяма Блэка</h2>
    <ul>
      <li v-for="painting in painting" :key="painting._id">
        {{ painting.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    paintings: Array,
  },
};
</script>

<style>
</style>