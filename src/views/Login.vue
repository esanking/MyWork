<template>
  <div class="Login">
    <form class="Form bg-dark p-3" v-if="ChangeFrom">
      <h3>登入系統</h3>
      <label for="account" class="form-label">帳號</label>
      <input
        type="text"
        aria-required="true"
        class="form-control mb-2"
        v-model="account.number"
        @keyup.enter="Login"
        name="number"
        v-validate="'required'"
      />
      <span class="text-danger mb-2" v-if="errors.has('number')"
        >請填寫帳號欄位</span
      >
      <label for="password" class="form-label">密碼</label>
      <input
        type="text"
        class="form-control mb-2"
        aria-required="true"
        v-model="account.password"
        @keyup.enter="Login"
        name="password"
        v-validate="'required'"
      />
      <span class="text-danger mb-2" v-if="errors.has('password')"
        >請填寫密碼欄位</span
      >
      <div class="d-flex justify-content-around w-100">
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="ClickChangeFrom"
        >
          去註冊
        </button>
        <button type="button" class="btn btn-outline-primary" @click="Login">
          登入
        </button>
      </div>
    </form>
    <form class="Form bg-dark p-3" v-if="!ChangeFrom">
      <h3>註冊系統</h3>
      <label for="account" class="form-label">帳號</label>
      <input
        type="text"
        aria-required="true"
        class="form-control mb-2"
        v-model="account.number"
        @keyup.enter="SignUp"
        name="number"
        v-validate="'required'"
      />
      <span class="text-danger mb-2" v-if="errors.has('number')"
        >請填寫帳號欄位</span
      >
      <label for="password" class="form-label">密碼</label>
      <input
        type="text"
        class="form-control mb-2"
        aria-required="true"
        v-model="account.password"
        @keyup.enter="SignUp"
        name="password"
        v-validate="'required'"
      />
      <span class="text-danger mb-2" v-if="errors.has('password')"
        >請填寫密碼欄位</span
      >
      <div class="d-flex justify-content-around w-100">
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="ClickChangeFrom"
        >
          去登入
        </button>
        <button type="button" class="btn btn-outline-primary" @click="SignUp">
          註冊
        </button>
      </div>
    </form>
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
          });
          vm.account = {};
        }
      });
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
.Login {
  display: flex;
  justify-content: center;
  width: 100%;
  .Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
  }
}
</style>
