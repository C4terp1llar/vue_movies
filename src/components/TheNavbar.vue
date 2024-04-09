<template>
  <nav class="p-s-m">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo"><i class="material-icons">movie</i></router-link>
      <i data-target="mobile-demo" class="material-icons sidenav-trigger">menu</i>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/watched"><i class="material-icons left">watch_later</i>Просмотренное</router-link>
        </li>
        <li>
          <router-link to="/favorite"><i class="material-icons left">favorite</i>Избранное</router-link>
        </li>
        <li>
          <router-link to="/search"><i class="material-icons left">search</i>Поиск</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <ul ref="mobileMenu" class="sidenav" id="mobile-demo">
    <li>
      <router-link to="/watched"><i class="material-icons left">watch_later</i>Просмотренное</router-link>
    </li>
    <li>
      <router-link to="/favorite"><i class="material-icons left">favorite</i>Избранное</router-link>
    </li>
    <li>
      <router-link to="/search"><i class="material-icons left">search</i>Поиск</router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const mobileMenu = ref(null);

onMounted(() => {
  const elems = mobileMenu.value;
  M.Sidenav.init(elems, {});
});
</script>

<style scoped lang="scss">
li{
  display: flex;
}
.sidenav-trigger{
  cursor: pointer;
  @media screen and (min-width: 993px) {
    display: none;
  }
}
</style>
