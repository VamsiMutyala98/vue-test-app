<template>
  <div class="login-wrapper">
    <div class="col-xs-12 p-0 d-flex justify-content-center">
      <div class="login-whiteBox">
        <form @submit.prevent="loginUser">
          <div class="login-container">
            <div class="login-input">
              <label for="email">Email</label>
              <input
                class="login-input-box-without-icon landing-input-field"
                type="text"
                name="email"
                placeholder="E-mail address"
                v-model="email"
              />
            </div>
          </div>
          <div class="login-container">
            <div class="login-input">
              <label for="password">Password</label>
              <input
                id="password"
                class="login-input-box-without-icon landing-input-field"
                type="password"
                name="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="alert alert-danger" v-if="errorMessage">
              <strong>{{ errorMessage }}</strong>
            </div>
          </div>
          <div class="login-btn-container">
            <button
              class="logInBtn"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '../../apis/login';

export default {
    name: 'loginPage',
    data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    getCredentials() {
      return {
        email: this.email,
        password: this.password,
      };
    },
    startLogoutTimer() {
      setTimeout(() => {
        localStorage.removeItem('accessToken');
        this.$router.push({name: 'loginPage'});
      }, 1800000);
    },
    async loginUser() {
      const formData = this.getCredentials();
      const response = await loginUser(formData);
      if (response && response.status === 201) {
        localStorage.setItem('accessToken', `Bearer ${response.data.access_token}`);
        this.startLogoutTimer();
        this.errorMessage = '';
        this.$router.push({name: 'dashboard'});
      } else {
        this.errorMessage = response.message;
      }
    }
  }
}
</script>

<style>
.login-wrapper {
  position: relative;
  padding-bottom: 58px;
  min-height: 100vh;
  background-color: cadetblue;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
main {
  padding: 30px 20px;
}
.login-card-desc {
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #333333;
}
.login-whiteBox {
  display: inline-block;
  margin-top: 100px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  max-width: 600px;
  min-width: 580px;
}
.login-input{
  display: flex;
  flex-direction: column;
}
.login-input-box-without-icon {
  padding: 15px 12px;
}
.login-container{
  padding: 20px 40px 20px 40px;
}
.login-btn-container{
  padding: 20px 40px 20px 40px;
  text-align: center;
}
.login-input label{
  margin-bottom: 10px;
}
.landing-input-field {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.alert{
  margin-top: 30px;
}
.logInBtn{
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  background-color: cadetblue;
  color: #fff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>