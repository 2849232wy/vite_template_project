<template>
  <NButton
    @click="setToken"
    color-red
    >{{ $t("home.title") }}</NButton
  >
  <div class="flex text-red">测试unocss</div>
</template>

<script setup lang="ts">
  import { defineOptions, onMounted, ref } from "vue";
  import { getHome } from "@/api/home";
  import { $t } from "@/i18n";
  defineOptions({
    name: "Home",
  });
  const setToken = () => {
    getHome();
  };
</script>

<style scoped lang="scss">
  .name {
    color: yellow;
    .age {
      display: flex;
    }
  }
</style>
