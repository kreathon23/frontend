<script setup lang="ts">
const router = useRouter();

const props = defineProps({
  logo: {
    type: Boolean,
    required: true
  }
});

const image = (props.logo) ? "/landing-page/fressnapf-logo.png" : "/arrow_back.svg";

const navigate_back = () => {
  
}
</script>

<template>
  <div class="navbar">
    <div class="topleft">
      <div @click="$router.go(-1)">
        <div class="logo">
          <img :class="(logo) ? 'logo-img' : 'back-arrow'" :src="image" alt="">
        </div>
      </div>
    </div>
    <div class="avatar">
      <img class="logo-img" src="/landing-page/user-circle-2.svg" alt="">
    </div>
  </div>
</template>