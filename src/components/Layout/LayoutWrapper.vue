<template>
  <div>
    <header-nav></header-nav>
    <header-menu></header-menu>
    <div class="layoutWrapper">
      <router-view></router-view>
    </div>
        
  </div>
</template>

<script>
import HeaderNav from '@/components/Header/HeaderNav.vue'
import HeaderMenu from '@/components/Header/HeaderMenu.vue'

export default {
  components: {
    HeaderNav,
    HeaderMenu
  }
}
</script>

<style>
.layoutWrapper{
  margin-left: 250px;
}
</style>