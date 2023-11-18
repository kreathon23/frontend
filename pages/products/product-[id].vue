<script setup lang="ts">
const route = useRoute();

let error_occured = ref("");
const product_id = route.params.id;
if (!validate_product_id(product_id)) {
  error_occured.value = "Not a valid product id";
}

//fetch product data
const product_img = "1100339.png";


export interface Material {
  type:               string;
  examples:           string;
  code:               number;
}

export interface FetchResults {
  productName:        string;
  productDescription: string;
  packagingType:      string;
  productImage:       string;
  barcode:            string;
  material:           Material | null;
  isRecyclable:       boolean;
  recommendations:    FetchResults[];
  productScore:       number;
}

const { data, pending, error, refresh } = await useFetch(`https://kreathon23-api.jh220.de/v1/products/${product_id}`);
const results =  (await data.value) as FetchResults;

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
      <h5>{{ product_id }}</h5>
      <div class="product-img-container">
        <img class="product-img" :src="results.productImage" alt="">
        <img class="product-img bg" :src="results.productImage" alt="">
      </div>
      <div class="product-score-container">
        <div class="product-score-bg">
          <h2>Score:</h2>
          <div class="product-score-smileys">
            <img v-for="score in 3" :src="`/score_${score}.svg`" :class="(results.productScore == score) ? '': 'disabled'" alt="">
          </div>
        </div>
      </div>
      <div class="product-recommendations">
        <div class="rec" v-for="product, index in results.recommendations" @click="navigate(product.barcode)">
          <div class="product-recommendation-container">
            <img class="product-recommendation-img" :src="product.productImage" alt="">
          </div>
        </div>
      </div>
      <h1>{{ results.material?.code }}</h1>
      {{ results.material?.type }}<br>
      {{ results.material?.examples }}<br>
    </div>
    <div v-else>
      {{ error_occured }}
    </div>
  </div>
</template>