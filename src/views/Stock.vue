<template>
  <div class="w-100 bg-warning">
    <div class="header pt-4">
      <div class="title w-100 text-center text-primary">股票複利試算</div>
    </div>
    <div class="main w-100 mt-4">
      <div class="outside w-100 d-flex justify-content-center">
        <div
          class="circle w-75 h-100 border border-primary d-flex flex-column"
          style="font-size: 16px"
        >
          <ul style="">
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-primary w-25">每月存入</label>
              <input type="number" v-model="coin" class="coin w-50" />
            </li>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-primary w-25">預存幾年</label>
              <input type="number" v-model="year" class="wantY w-50" />
            </li>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-primary w-25">殖利率</label>
              <input
                type="number"
                v-model="rest"
                aria-label="%"
                placeholder="%"
                class="rest w-50"
              />
            </li>
            <li class="w-100 text-center mt-2">
              <div class="btn btn-primary submit" @click="submit">submit</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">年</th>
            <th scope="col">存金額</th>
            <th scope="col">金額加利息</th>
            <th scope="col">單年利息</th>
          </tr>
        </thead>
        <tbody class="td"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompoundInterest',
  props: {
    msg: String,
  },
  data() {
    return {
      coin: [],
      year: [],
      rest: [],
    };
  },
  methods: {
    submit() {
      let befint = 0;
      let coinTotal = 0;
      let TotalMoney = 0;
      const td = document.querySelector('.td');
      let total = '';
      for (let i = 1; i <= this.year; i += 1) {
        coinTotal += this.coin * 12;
        befint = Math.round((this.coin * 12 + TotalMoney) * (this.rest / 100));
        TotalMoney = Math.round(this.coin * 12 + TotalMoney + befint);
        total += `
        <tr>
            <td>第${i}年</td>
            <td>${coinTotal.toLocaleString()}</td>
            <td>${TotalMoney.toLocaleString()}</td>
            <td>${befint.toLocaleString()}</td>
        </tr>`;
      }
      td.innerHTML = total;
    },
  },
  created() {},
};
</script>
<style lang="scss">
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
