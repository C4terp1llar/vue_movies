<script setup>
import {ref} from "vue";
import AppMovie from "@/components/AppMovie.vue";
import AppLoader from "@/components/AppLoader.vue";

const searchQuery = ref('');
const moviesByQuery = ref(null);
const notFound = ref(false);
const isLoading = ref(false);
async function handleSubmit() {
  try {
    isLoading.value = true;
    notFound.value = false;

    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery.value}&apikey=647f01ec`);
    moviesByQuery.value = await response.json();

    if (moviesByQuery.value.Error){
      notFound.value = true;
    }
  } catch (e) {
    console.error(e.message)
  }finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <form @submit.prevent="handleSubmit">
            <div class="input-field">
              <input id="search" type="text" class="validate" v-model="searchQuery"/>
              <label for="search">Поиск</label>
            </div>
            <button :disabled="isLoading || !searchQuery" class="btn waves-effect waves-light" type="submit" name="action">
              <template v-if="isLoading">
                <app-loader/>
              </template>
              <template v-else>
                Поиск
                <i class="material-icons right">search</i>
              </template>
            </button>
          </form>
        </div>
      </div>

      <hr>

      <div v-if="moviesByQuery" class="grid-cards-layout">
        <app-movie :moviesByQuery="moviesByQuery"/>
      </div>

      <div v-else>
        <p>Введите запрос для поиска фильмов</p>
      </div>

      <div v-if="notFound">
        <p>По вашему запросу ничего не найдено</p>
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">

</style>