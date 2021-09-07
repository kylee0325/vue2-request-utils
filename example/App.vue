<template>
  <div>
    <button @click="run">run</button>
    <br />
    {{ loading ? "loading..." : data }}
  </div>
</template>

<script>
import { defineComponent, watchEffect } from "@vue/composition-api";
import { useRequest } from "vue2-request-utils";

function testService() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
}
export default defineComponent({
  setup() {
    const { run, data, loading } = useRequest(testService);
    watchEffect(() => {
      console.log(loading.value);
    });
    return {
      run,
      data,
      loading,
    };
  },
});
</script>

<style scoped></style>
