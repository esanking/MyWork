<template>
  <div class="LoginBg">
    <div class="Login">
      <form class="Form p-3 text-white" v-if="ChangeFrom">
        <h3>登入系統</h3>
        <label for="account" class="form-label">帳號</label>
        <input
          type="text"
          aria-required="true"
          class="form-control"
          v-model="account.number"
          @keyup.enter="Login"
          name="number"
          placeholder="UserName"
          v-validate="'required'"
        />
        <span class="text-success" v-if="errors.has('number')"
          >請填寫帳號欄位</span
        >
        <label for="password" class="form-label">密碼</label>
        <input
          type="password"
          class="form-control"
          aria-required="true"
          v-model="account.password"
          @keyup.enter="Login"
          name="password"
          placeholder="PassWord"
          v-validate="'required'"
        />
        <span class="text-success" v-if="errors.has('password')"
          >請填寫密碼欄位</span
        >
        <div class="d-flex justify-content-around w-100">
          <button
            type="button"
            class="btn btn-outline-danger text-white"
            @click="ClickChangeFrom"
          >
            去註冊
          </button>
          <button
            type="button"
            class="btn btn-outline-primary text-white"
            @click="Login"
          >
            登入
          </button>
        </div>
      </form>
      <form class="Form p-3 text-white" v-if="!ChangeFrom">
        <h3>註冊系統</h3>
        <label for="account" class="form-label">帳號</label>
        <input
          type="text"
          aria-required="true"
          class="form-control"
          v-model="account.number"
          @keyup.enter="SignUp"
          name="number"
          placeholder="UserName"
          v-validate="'required'"
        />
        <span class="text-success" v-if="errors.has('number')"
          >請填寫帳號欄位</span
        >
        <label for="password" class="form-label">密碼</label>
        <input
          type="password"
          class="form-control"
          aria-required="true"
          v-model="account.password"
          @keyup.enter="SignUp"
          name="password"
          placeholder="PassWord"
          v-validate="'required'"
        />
        <span class="text-success" v-if="errors.has('password')"
          >請填寫密碼欄位</span
        >
        <div class="d-flex justify-content-around w-100">
          <button
            type="button"
            class="btn btn-outline-danger text-white"
            @click="ClickChangeFrom"
          >
            去登入
          </button>
          <button
            type="button"
            class="btn btn-outline-primary text-white"
            @click="SignUp"
          >
            註冊
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {},
      ChangeFrom: true,
    };
  },
  methods: {
    ClickChangeFrom() {
      if (this.ChangeFrom) {
        this.ChangeFrom = !this.ChangeFrom;
      } else {
        this.ChangeFrom = !this.ChangeFrom;
      }
    },
    Login() {
      const vm = this;
      vm.$validator.validate().then((result) => {
        if (result) {
          const api = 'https://obscure-cove-49403.herokuapp.com/Login';
          // const api = 'http://localhost:3000/Login';
          vm.$http.post(api, vm.account).then((res) => {
            alert(res.data.meg);
            this.RouterClock(res);
            vm.account = {};
          });
        }
      });
    },
    RouterClock(res) {
      const vm = this;
      if (res.data.success) {
        vm.$router.push(`/ClockIn/${this.account.number}`);
      }
    },
    SignUp() {
      const vm = this;
      vm.$validator.validate().then((result) => {
        if (result) {
          const api = 'https://obscure-cove-49403.herokuapp.com/SignUp';
          // const api = 'http://localhost:3000/SignUp';
          vm.$http.post(api, vm.account).then((res) => {
            alert(res.data.meg);
          });
          vm.account = {};
        }
      });
    },
  },
};
</script>
<style lang="scss">
.LoginBg {
  height: 100vh;
  background: #5bb6b2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Login {
  display: flex;
  justify-content: center;
  width: 100%;
  .Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    background: #590c45;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
  input[type='text'],
  input[type='password'] {
    width: 200px;
    border: 0;
    background: none;
    margin: 10px auto;
    text-align: center;
    border: 2px solid #21c3dc;
    outline: none;
    color: white;
    border-radius: 10px;
    transition: 0.25s;
  }
  input[type='text']:focus,
  input[type='password']:focus {
    width: 240px;
    border-color: #e5ae38;
  }
}
</style>
