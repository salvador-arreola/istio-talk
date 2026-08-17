<template>
  <header v-if="logoHeader">
    <img :src="logoSrc" width="100" height="100" class="object-contain" />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { resolveAssetUrl } from "../layoutHelper";

const props = defineProps({
  logoHeader: {
    type: String,
  },
});
const logoSrc = computed(() => resolveAssetUrl(props.logoHeader));
</script>
