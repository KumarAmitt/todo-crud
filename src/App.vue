<template>
  <TheNavbar />
  <router-view/>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
