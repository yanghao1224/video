<template>
  <div class="more-continue">
    <div class="header clearfix" @click="go">
      <div class="back">
        <div>返回</div>
      </div>
      <div class="sou clearfix">
        <input type="text" placeholder="哪吒" />
        <button @click="search">搜索</button>
      </div>
    </div>
    <!-- 查询统计 -->
    <div class="search-stats">
      <div class="cont">
        <h3>电影</h3>
        <span>更多</span>
      </div>
      <!-- <p></p> -->
    </div>
    <!-- 查询结果 -->
    <div class="search-list">
      <div class="list-wrop" v-for="(item,ind) in videolist" :key="ind">
        <div class="left-box">
          <img :src="item.img_url[0]" />
        </div>
        <div class="right-box">
          <h1>{{ item.name[0] }}</h1>
          <div class="cont">
              <span class="ri">{{ item.zhu_yan[0] }},{{ item.zhu_yan[1] }},{{ item.zhu_yan[2] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// http://localhost:8080/static/data.json
import axios from "axios";
export default {
  data() {
    return {
      videolist: []
    };
  },
  created() {
    this.getVideolist();
  },
  methods: {
    //点击跳转到search页面
    search() {
      this.$router.push("/search");
    },
    go() {
      this.$router.push("/");
    },
    // 获取数据
    getVideolist() {
      axios
        .get("http://localhost:8080/static/data.json")
        .then(res => {
          // console.log(res.data);
          this.videolist = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.more-continue {
  background: #eff0f3;
  margin-bottom: 0.42666667rem;
  .header {
    margin-bottom: 0.42666667rem;
    .back {
      float: left;
      width: 15%;
      height: 1.344rem;
      padding: 0.2rem 0.1rem;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-width: 0.29866667rem 0.64rem 0.29866667rem 0;
        border-style: solid;
        border-color: transparent #222020 transparent transparent;
        position: absolute;
        top: 0.55466667rem;
        left: 0rem;
      }
      div {
        width: 100%;
        height: 100%;
        font-size: 0.74666667rem;
        text-align: center;
        line-height: 1.344rem;
        position: relative;
        left: 0.21333333rem;
      }
    }
    .sou {
      float: right;
      width: 80%;
      padding: 0.2rem 0.1rem;
      input {
        float: left;
        box-sizing: border-box;
        width: 76%;
        height: 1.344rem;
        font-size: 0.707407rem;
        color: #fff;
        background: #ff8d1b;
        padding: 0.42666667rem 0.512rem;
        border-radius: 1.152rem 0 0 1.152rem;
      }
      button {
        float: left;
        width: 24%;
        height: 1.344rem;
        background: #181717;
        color: #fff;
        font-size: 0.64740741rem;
        border-radius: 0 1.152rem 1.152rem 0;
      }
    }
  }
  .search-stats {
    .cont {
      display: flex;
      justify-content: space-between;
      height: 1.3rem;
      padding: 0.3rem 1.1rem;
      border-bottom: 1px #f4f4f4 solid;
      h3 {
        font: 0.9rem/1.3rem sans-serif;
        font-weight: bold;
      }
      span {
        font-size: 0.6rem;
        font-weight: 500;
        color: #949999;
      }
    }
    p {
      width: 100%;
      height: 1px;
      background: #1c85d4;
    }
  }
  .search-list {
    box-sizing: border-box;
    background: #f5f5f5;
    padding-top: 0.29866667rem;
    width: 100%;
    .list-wrop {
      float: left;
      width: 30%;
      height: 10rem;
      padding: 0.6rem 0.2rem;
      overflow: hidden;
      .left-box {
        width: 4.736rem;
        height: 6.784rem;
        img {
          border-radius: 0.42666667rem;
          width: 100%;
          height: 100%;
        }
      }
      .right-box {
        width: 8.53333333rem;
        margin-left: 0.49066667rem;
        h1 {
          box-sizing: border-box;
          font-size: 0.61866667rem;
          padding: 0.42666667rem 0;
          color: #1c85d4;
          text-align: left;
          font-weight: bold;
        }
        .cont {
          box-sizing: border-box;
          padding: 0.14933333rem 0;
          font-size: 0.55466667rem;
          p {
            color: #3f4953;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .ri {
              color: #7a8f25;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>