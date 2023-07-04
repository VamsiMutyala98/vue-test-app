<template>
  <div class="productDetailsWrapper p-5">
   {{ this.productDetails }}
  </div>
</template>

<script>
import {getProductsDataById} from '@/apis/products'
export default {
    data() {
      return{
        productDetails: {},
      }
    },
    async created() {
      this.productDetails = await getProductsDataById(this.$route.params.productId);
    }
}
</script>

<style>

</style>