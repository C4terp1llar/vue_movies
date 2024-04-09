<script setup>
import AppMovie from "@/components/AppMovie.vue";
import {useMovieStore} from "@/stores/movieStore";

const store = useMovieStore();
</script>

<template>
  <div class="container">
    <div class="grid-cards-layout" v-if="store.getFavoriteMovies.length">
      <app-movie :movies="store.getFavoriteMovies"/>
    </div>
    <div class="center" v-else>
      <h4>Избранных фильмов пока нет</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>