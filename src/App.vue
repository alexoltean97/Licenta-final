<script>
import { RouterView } from 'vue-router';
import Header from "./components/layout/Header.vue";

export default {
  components:{
    Header
  }
}
</script>


<template>
  <Header />
  <RouterView />
</template>

<style scoped>
</style>
