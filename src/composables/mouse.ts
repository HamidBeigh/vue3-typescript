import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  interface Event {
    pageX: number;
    pageY: number;
  }
  const x = ref(0);
  const y = ref(0);

  function update(event: Event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));
  return { x, y };
}
