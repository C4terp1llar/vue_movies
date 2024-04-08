<script setup>
defineProps({
  moviesByQuery: {
    required: true,
    type: Object
  }
})

</script>

<template>
  <div class="grid-child-card card p-m" v-for="movie in moviesByQuery.Search" :key="movie.imdbID">
    <img :src="movie.Poster" alt="Movie Poster">
    <span class="card-title">{{ movie.Title }}</span>
    <p>{{ movie.Year }}</p>
    <div class="controls">
      <button class="btn-small">
        <i class="material-icons">favorite</i>
      </button>
      <button class="btn-small">
        <i class="material-icons">remove_red_eye</i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls{
  display: flex;
  gap: 15px;
}
</style>