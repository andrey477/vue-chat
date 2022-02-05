<template>
  <header class="header">
    <h1>Chat application</h1>
  </header>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-bottom: 12px;
  border-bottom: 1px solid black;
}
</style>
