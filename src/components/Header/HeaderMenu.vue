<template>
  <div class="row m-0">
    <div class="col-sm-3 col-md-3">
      <div class="sideNavBar">
        <ul class="sideNavBarList mb-0 p-0">
          <li v-for="item in sideBarMenuItems" :key="item.menuItem"
            class="sideNavBarItem" @click="redirect(item.routeName)" 
            :class="{ active: activeMenu.indexOf(item.routeName) != -1 }">{{ item.menuItem }}
          </li>
        </ul>       
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: this.$route.path,
      sideBarMenuItems: [
        {
          menuItem: 'Dashboard',
          routeName: '/layout/dashboard'
        },
        {
          menuItem: 'Products',
          routeName: '/layout/products'
        },
        {
          menuItem: 'Categories',
          routeName: '/layout/categories'
        },
        {
          menuItem: 'Users',
          routeName: '/layout/users'
        },
        {
          menuItem: 'Cart',
          routeName: '/layout/cart'
        }
      ],
    }
  },
  methods: {
    redirect(routeName) {
      this.$router.push({ path: routeName }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
      this.activeMenu = routeName;
    }
  },
}
</script>

<style>
.sideNavBar{
  background-color: #87afb0;
  position: fixed;
  width: 250px;
  top: 0;
  bottom: 0;
  left: 0px;
  margin-top: 80px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-right: 0.5px solid #c4c4c4;
}
.sideNavBarList::-webkit-scrollbar-thumb{
  background: #c4c4c4;
  border-radius: 10px;
}
.sideNavBarList::-webkit-scrollbar{
  width: 8px;
}
.sideNavBarList{
  margin-top: 15px;
  overflow: auto;
  height: 71vh;
}
ul li{
  list-style-type: none;
}
.sideNavBarItem{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px 40px;
  margin-bottom: 13px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.sideNavBarItem.active{
  background-color: cadetblue;
}
</style>