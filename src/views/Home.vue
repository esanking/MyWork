<template>
  <div class="ToolWeb">
    <div class="PersonalProfile">
      <h3 class="title text-primary">Personal Profile</h3>
      <p class="Border"></p>
      <div class="Profile">
        <div class="FilePhoto"></div>
        <div class="ProfileText">
          <h3>黃文毅 ( WEN - YI - HUANG )</h3>
          <p>
            大家好，我叫黃文毅，
            <br />
            透過網路資源接觸前端領域已經有1年多的時間了，前端的技術日新月異，
            <br />
            要一直保持樂觀學習，這裡會放置我做的小作品。
          </p>
        </div>
      </div>
    </div>
    <div class="Works">
      <div class="WorksTitle">
        <h3 class="title text-primary">My works</h3>
        <div class="Border"></div>
      </div>
      <ul class="my-2 row WorkList">
        <router-link
          v-for="(item, key) in works"
          :key="key"
          :to="{ path: item.link }"
          class="WorkItem col-md-4 col-sm-12"
          ><li
            :style="{
              backgroundImage: `url(${item.img})`,
            }"
          >
            <div class="Overlay">
              <p>{{ item.title }}</p>
            </div>
          </li></router-link
        >
      </ul>
    </div>
  </div>
</template>
<script>
import StockImg from '@/assets/img/Stock.png';
import TodoImg from '@/assets/img/TodoList.png';
import Login from '@/assets/img/Login.png';

export default {
  data() {
    return {
      works: [
        {
          img: StockImg,
          link: '/Stock',
          title: '股票複利',
        },
        {
          img: TodoImg,
          link: '/TodoList',
          title: 'TodoList',
        },
        {
          img: Login,
          link: '/Login',
          title: 'Login',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.row {
  margin-right: 0;
  margin-left: 0;
}
.PersonalProfile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  .Profile {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .FilePhoto {
      background-image: url(~@/assets/img/FilePhoto.jpg);
      background-position: center;
      background-size: cover;
      border: 1px solid #000;
      border-radius: 50%;
      width: 270px;
      height: 270px;
    }
    .ProfileText {
      width: 50%;
    }
  }
}
@media (max-width: 767px) {
  .PersonalProfile {
    .Profile {
      flex-direction: column;
      .ProfileText {
        margin-top: 10px;
        width: 90%;
      }
    }
  }
}
.WorksTitle {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .Border {
    width: 10%;
    border-bottom: 1px solid rgb(167, 46, 46);
  }
}
ul {
  padding: 0;
}

.WorkItem {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  li {
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
    .Overlay {
      position: absolute;
      width: 300px;
      height: 200px;
      background: rgba(31, 44, 108, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      transform: scale(0);
      transition: 0.5s;
      p {
        display: inline-block;
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        color: rgb(232, 241, 240);
      }
    }
  }
}
@media (max-width: 991px) {
  .WorkItem {
    li {
      .Overlay {
        width: 216px;
        height: 200px;
      }
    }
  }
}
@media (max-width: 767px) {
  .WorkItem {
    li {
      .Overlay {
        width: 300px;
        height: 200px;
      }
    }
  }
}

.WorkItem li:hover .Overlay {
  transform: scale(1);
}
</style>
