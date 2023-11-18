<script setup lang="ts">
const props = defineProps({
  materials: {
    type: Array<Material>,
    required: true
  }
});
</script>

<template>
  <div class="recycling-code" v-for="data, index in materials">
    <div class="code-tri-frame">
      <img src="/score.png" alt="">
      <div class="score">{{ data.code }}</div>
      <div class="code-description">
        
      </div>
    </div>
  </div>
</template>