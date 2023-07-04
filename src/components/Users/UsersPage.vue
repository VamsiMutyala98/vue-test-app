<template>
  <div class="usersWrapper">{{ users }}</div>
</template>

<script>
import {getUsersData} from '@/apis/users'
export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await getUsersData();
  }
}
</script>

<style>

</style>