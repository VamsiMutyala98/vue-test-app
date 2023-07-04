<template>
  <div class="dashboardWrapper p-5">
    <h1>Welcome to Dashboard page</h1>
    <div>
      {{ loggedInUser }}
    </div>
  </div>
</template>

<script>
import {getLoggedInUserData} from '@/apis/login'
export default {
  name: 'dashboardPage',
  data() {
    return {
      loggedInUser: {}
    }
  },
  async created() {
    this.loggedInUser = await getLoggedInUserData();
}
}

</script>

<style>

</style>