<script setup lang="ts">
import { reactive } from "vue";
import { useMouse } from "./composables/mouse";
import Counter from "./components/Counter.vue"; 
// import { useRefHistory } from "@vueuse/core";
// VueUse composiable is a package vueuse.org

// const count = ref(0);
// const { undo } = useRefHistory(count);
interface AppInfo {
  name: string;
  slogan: string;
}
const { x, y } = useMouse();
const appInfo: AppInfo = reactive({
  name: "Counter",
  slogan: "An app you can count on",
});
// const nextCount = computed(() => {
//   if (count.value !== null) {
//     return count.value + 1;
//   }
//   return null;
// });
</script>

<template>
  <div>
    <p>Mouse position at {{ x }}, {{ y }}</p>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
    <Counter :limit="10" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
