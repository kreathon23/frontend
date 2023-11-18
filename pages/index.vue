<script setup lang="ts">
const currentTab = useCurrentTab();

currentTab.value = "home"
</script>

<template>
  <div class="container">
    <NavBar :logo="true" />
    <div class="header">
      Green Package Scanner
      <div class="desc">
        Finde nachhaltige Haustierprodukte mit einem simplen Barcode-Scan.
      </div>
    </div>
    <div class="barcode-scanner-container">
    <QrCode />
    </div>
    <div class="svg-container">
      <img src="/landing-page/re-symbol.svg" alt="">
    </div>
  </div>
  
</template>