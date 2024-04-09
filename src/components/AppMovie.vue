<script setup>
import { useMovieStore } from "@/stores/movieStore";
import { computed, defineProps } from "vue";

const store = useMovieStore();

const props = defineProps({
  movies: {
    required: true,
    type: Object
  }
});

const watchedMovies = computed(() => store.getWatchedMovies);
const favoriteMovies = computed(() => store.getFavoriteMovies);

const checkWatch = (id) => {
  if (watchedMovies.value && watchedMovies.value.find(el => el.imdbID === id)) {
    return true;
  }
};

const checkFavorite = (id) => {
  if (favoriteMovies.value && favoriteMovies.value.find(el => el.imdbID === id)) {
    return true;
  }
};
</script>

<template>
  <div class="grid-child-card card p-m" v-for="movie in movies" :key="movie.imdbID">
    <img :src="movie.Poster" alt="Movie Poster">
    <span class="card-title">{{ movie.Title }}</span>
    <p>{{ movie.Year }}</p>
    <div class="controls">
      <button
          v-if="!movie.isWatched"
          :class="{'btn-small': true, 'red': checkFavorite(movie.imdbID)}"
          @click=" checkFavorite(movie.imdbID) ? store.deleteFromFavoriteMovies(movie.imdbID) : store.addToFavoriteMovies(movie)"
      >
        <i class="material-icons">favorite</i>
      </button>
      <button
          v-if="!movie.isFavorite"
          :class="{'btn-small': true, 'red': checkWatch(movie.imdbID)}"
          @click=" checkWatch(movie.imdbID) ? store.deleteFromWatchedMovies(movie.imdbID) : store.addToWatchedMovies(movie)"
      >
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
.red{
  background-color: darkred;
}
</style>