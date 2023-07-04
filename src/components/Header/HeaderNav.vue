<template>
  <div class="headerNav">
    <nav>
      <div class="row m-0 navContainer d-flex align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 headerLogo">Mi Shopping App</div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 headerRightContainer pr-40">
            <button class="logOutBtn" @click="logOut">Log out</button>
          </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.removeItem('accessToken');
      this.$router.push({name: 'loginPage'});
    }
  }
}
</script>

<style>
.headerNav{
  height: 80px;
  background-color: cadetblue;
}
.headerLogo{
  color: #fff;
  font-size: 30px;
  font-weight: bolder;
  text-align: left;
  padding-left: 40px;
  display: flex;
  align-items: center;
}
.navContainer{
  height: 80px;
  position: fixed;
  width: 100%;
  background-color: cadetblue;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
.headerRightContainer{
  text-align: right;
}
.headerRightContainer .logOutBtn{
  padding: 7px 20px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  color: cadetblue;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>