<script setup>
const currentTab = useCurrentTab();
</script>

<template>
    <div class="tabs-container">
        <div class="tabs">
            <div class="home">
                <img :class="(currentTab == 'home') ? 'icon-active' : 'icon'" src="/landing-page/home.svg" alt="">
                <div v-if="currentTab == 'home'">
                    <div class="home-active-bg">
                    </div>
                </div>
            </div>
            <div class="package">

            </div>
            <div class="shop">

            </div>

        </div>
    </div>
</template>
