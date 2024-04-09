<script setup>
import AppMovie from "@/components/AppMovie.vue";
import {useMovieStore} from "@/stores/movieStore";

const store = useMovieStore();
</script>

<template>
<div class="container">
  <div class="grid-cards-layout" v-if="store.getWatchedMovies.length">
    <app-movie :movies="store.getWatchedMovies"/>
  </div>
  <div class="center" v-else>
    <h4 >Просмотренных фильмов пока нет</h4>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>