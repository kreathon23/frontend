<script setup lang="ts">
const currentTab = useCurrentTab();

currentTab.value = "home"
</script>

<template>
  <div class="container">
    <NavBar :logo="true" />
    <div class="header">
      Green Pet Scanner
      <div class="desc">
        Finde nachhaltige Haustierprodukte mit einem simplen Barcode-Scan.
      </div>
    </div>
    <div class="barcode-scanner-container">
    <QrCode />
    </div>
    <Tabs/>
  </div>
  
</template>