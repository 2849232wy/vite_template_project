<script setup lang="ts">
  import AppProviderConfig from "./components/config/AppProviderConfig.vue";
</script>

<template>
  <n-theme-editor>
    <NDialogProvider>
      <NMessageProvider>
        <AppProviderConfig>
          <RouterView></RouterView>
        </AppProviderConfig>
      </NMessageProvider>
    </NDialogProvider>
  </n-theme-editor>
</template>

<style scoped></style>
