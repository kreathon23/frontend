<script setup lang="ts">
const props = defineProps({
  materials: {
    type: Array<Material>,
    required: true
  }
});
</script>

<template>
  <div class="recycling">
    <h3 v-if="materials.length > 0">
      Was bedeuten die Verpackungs-Codes?
    </h3>
    <h3 v-else>
      Keine Verpackungs-Informationen vorhanden!
    </h3>
    <div class="recycling-code" v-for="data, index in materials">
      <div class="code-tri-frame">
        <img src="/score.png" alt="">
        <div class="score">{{ data.code }}</div>
        <div class="code-description">
          <h5>
            Material:
          </h5>
          {{ data.type }}
          <h5>
            Beispiele:
          </h5>
          {{ data.examples }}
          <h5>
            Eco-Info:
          </h5>
          {{ data.ecoInfo }}
          <h5>
            Mülltonne:
          </h5>
          {{ data.bin.german }}
        </div>
      </div>
    </div>
  </div>
</template>