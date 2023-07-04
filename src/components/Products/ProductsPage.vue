<template>
  <div class="productsWrapper">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsData" :key="product.id"
         class="productsTableRow">
          <td scope="row">{{ product.category.toUpperCase() }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="viewMoreDetailsBtn" @click="navigateToProductDetails(product.id)">View More Details</button>
          </td>
        </tr>
        <tr v-if="productsData.length === 0">
          <td>No Records Found</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import {getProductsData} from '@/apis/products'

export default {
  data() {
    return{
      productsData: [],
    }
  },
  async created() {
    const response  = await getProductsData();
    if(response && response.status === 200) {
      this.productsData = response.data;
    }
  },
  methods: {
    navigateToProductDetails(productId) {
      this.$router.push({path: `/layout/products/product-detail-view/${productId}`})
    }
  }
}
</script>

<style>
.productsWrapper{
  padding: 20px;
}
.productImage{
  height: 200px;
  width: 200px;
}
/* .productsTableRow{
  cursor: pointer;
} */
.viewMoreDetailsBtn{
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: cadetblue;
  font-size: 16px;
  font-weight: 600;
}
</style>