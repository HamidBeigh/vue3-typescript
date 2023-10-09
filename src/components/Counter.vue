<script setup lang="ts">
import { ref, onMounted } from "vue";
import fetchCount from "../fetchCount";

interface Props {
  limit: number;
  alertMessageOnLimit?: string;
}
const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: "Can not go higher",
});
const count = ref<number | null>(null);
function addCount(num: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit);
    } else {
      count.value += num;
    }
  }
}
onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount;
  });
});
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount(1)">Add</button>
  </div>
</template>

<style scoped></style>
