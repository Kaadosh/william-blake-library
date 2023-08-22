<template>
  <div>
    <h2>{{ painting.title }}</h2>
    <img :src="painting.imageUrl" alt="Painting" />
    <p>{{ painting.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    painting: Object,
  },
};
</script>

<style>
</style>