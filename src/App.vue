<template>
  <HelloWorld />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
em {
  font-style: normal;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(45deg, #f4f1ff, #fff5f5);
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
