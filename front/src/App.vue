<template>
  <v-app>
    <Header/>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header/Header.vue";

export default Vue.extend({
  name: "App",
  components: {Header},
  data: () => ({
    //
  }),
});
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
