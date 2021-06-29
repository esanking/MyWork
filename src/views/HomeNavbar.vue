<template>
  <div class="wrap">
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <router-link to="/" class="RouterLink"
          ><h1 class="WebIcon">蚊子工具網</h1></router-link
        >
      </div>
    </nav>
    <div class="container-md mb-5">
      <router-view></router-view>
    </div>
    <footer class="w-100 p-5 bg-light footer">
      <h1 class="WebIcon">蚊子工具網</h1>
      <ul>
        <li>
          <i class="far fa-envelope IconSz"></i><span>asd500373@gmail.com</span>
        </li>
        <li>
          <a href="https://github.com/esanking"
            ><i class="fab fa-github IconSz"></i
          ></a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
</script>
<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.RouterLink {
  text-decoration: none;
}
.container-md {
  padding-right: 0;
  padding-left: 0;
  max-width: 100%;
  height: 100%;
  flex: 1;
}
.WebIcon {
  background: linear-gradient(to top, #723fd1, #d8939a, #d8671b);
  background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
li {
  list-style-type: none;
}
.footer {
  display: flex;
  justify-content: space-evenly;
  .IconSz {
    font-size: 28px;
    margin-right: 10px;
  }
}
@media (max-width: 767px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>
