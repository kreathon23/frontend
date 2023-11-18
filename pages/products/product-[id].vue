<script setup lang="ts">
const route = useRoute();

let error_occured = ref("");
const product_id = route.params.id;
if (!validate_product_id(product_id)) {
  error_occured.value = "Not a valid product id";
}

//fetch product data
const product_img = "1100339.png";

const { data, pending, error, refresh } = await useFetch(`https://kreathon23-api.jh220.de/v1/products/${product_id}`);
const results =  (await data.value) as FetchResults;

if (error.value) {
  window.location.href = '/'
}

console.log(results)

const navigate = (barcode: string) => {
  const new_url = `/products/product-${barcode}`;
  navigateTo(new_url);
}
</script>

<template>
  <div>
    <NavBar :logo="false" />
    <div class="product" v-if="error_occured == ''">
      <h1 class="product-title">{{ results.productName }}</h1>
      <h5 class="product-price">{{ results.price }}€</h5>
      <div class="product-img-container">
        <img class="product-img" :src="results.productImage" alt="">
        <img class="product-img bg" :src="results.productImage" alt="">
      </div>
      <div class="product-score-container">
        <div class="product-score-bg">
          <h2>Öko-Score:</h2>
          <div class="product-score-smileys">
            <img v-for="score in 3" :src="`/score_${score}.svg`" :class="(results.productScore == score) ? '': 'disabled'" alt="">
          </div>
        </div>
      </div>
      <div class="seperator"></div>
      <RecyclingCodes :materials="results.materials" />
      <h3 class="recommendation-heading" v-if="results.recommendations.length > 0">Nachhaligere Empfehlungen:</h3>
      <h3 class="recommendation-heading" v-else>Ihre nachhaltigste Wahl!</h3>
      <div class="product-recommendations" v-if="results.recommendations.length > 0">
        <div class="rec" v-for="product, index in results.recommendations" @click="navigate(product.barcode)">
          <div :style="`background-color: ${(product.productScore == 1) ? '#EC5A5A' : (product.productScore == 2) ? '#E2BE60' : '#7BDA6B'};`" :class="`recommendation-rating`"></div>
          <div class="product-recommendation-container">
            <img class="product-recommendation-img" :src="product.productImage" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ error_occured }}
    </div>
  </div>
</template>
