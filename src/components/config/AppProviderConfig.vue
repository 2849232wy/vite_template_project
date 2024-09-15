<script lang="ts">
  import { useDialog, useMessage } from "naive-ui";
  import { defineComponent } from "vue";
  export default defineComponent({
    setup() {
      window.$message = useMessage();
      window.$dialog = useDialog();
    },
  });
</script>
<template>
  <slot></slot>
</template>

<style scoped></style>
