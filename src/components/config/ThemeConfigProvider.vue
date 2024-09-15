<template>
  <NConfigProvider
    :theme-overrides="theme"
    :locale="zhCN"
  >
    <slot></slot>
  </NConfigProvider>
</template>

<script setup lang="ts">
  import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";
  import { zhCN, dateZhCN } from "naive-ui";
  const theme: GlobalThemeOverrides = {
    common: {
      primaryColor: "#3341DBFF",
      primaryColorHover: "#3E38F1FF",
      primaryColorPressed: "#2727E2FF",
      primaryColorSuppl: "#293FE9FF",
      infoColor: "#B3B2B8FF",
      infoColorHover: "#C6C8CBFF",
      infoColorPressed: "#DBDEE1FF",
      infoColorSuppl: "#B7BABDFF",
      bodyColor: "#E1E1E5FF",
    },
  };
</script>

<style scoped></style>
