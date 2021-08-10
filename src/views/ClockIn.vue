<template>
  <div class="w-100 bg-pink">
    <div class="ClockInImg"></div>
    <div class="ClockIn">
      <h1 class="text-info fw-bold">打卡</h1>
      <div class="ClockInForm">
        <div class="FormUser">
          Hello esan,
          <br />
          請打卡
        </div>
        <div class="ClockBtn bg-info">
          <h1>上班</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.ClockInImg {
  width: 100%;
  height: 650px;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/ClockIn.png);
  background-position: center;
}
.ClockIn {
  width: 90%;
  margin: 0 auto;
}
.ClockInForm {
  display: flex;
  justify-content: center;
  .FormUser {
    width: 30%;
    text-align: center;
  }
  .ClockBtn {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
}
</style>
