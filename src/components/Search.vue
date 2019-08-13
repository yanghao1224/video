<template>
  <div class="search-continue">
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
      <div class="cont">xx视频共（xx个）</div>
      <p></p>
    </div>
    <!-- 查询结果 -->
    <div class="search-list">
      <div class="list-wrop" v-for="(item,ind) in videolist" :key="ind" @click="xiaxi(ind)">
        <div class="left-box">
          <img :src="item.img_url[0]" />
        </div>
        <div class="right-box">
          <h1>{{ item.name[0] }}</h1>
          <div class="cont">
            <p>
              分类：
              <span class="ri">{{ item.lei_xing }}</span>
            </p>
            <p>
              演员：
              <span class="ri">{{ item.zhu_yan[0] }},{{ item.zhu_yan[1] }},{{ item.zhu_yan[2] }}</span>
            </p>
            <p>
              状态：
              <span class="ri">BD高清</span>
            </p>
            <p>
              时间：
              <span class="ri">{{ item.update }}</span>
            </p>
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
          // console.log(this.$route.query.name)
          if (this.$route.query.name === "") {
            this.videolist = res.data;
            this.$store.commit('addVideo',this.videolist)
          } else {
            // var arr = []
            res.data.forEach(val => {
              if (val.name[0].indexOf(this.$route.query.name) !=-1) {
                // arr.push(val)
                // console.log(arr);
                this.videolist.push(val)
                this.$store.commit('addVideo',this.videolist)
              }
            });
          }

          // this.videolist = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转到详情页
    xiaxi(id) {
      this.$router.push("/xiaxi/" + id);
    }
  }
};
</script>
<style lang="less" scoped>
.search-continue {
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
      font-size: 0.66133333rem;
      height: 1.728rem;
      line-height: 1.728rem;
      text-align: center;
      color: #1c85d4;
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
    .list-wrop {
      display: flex;
      box-sizing: border-box;
      background: #fff;
      padding: 0.192rem;
      margin-bottom: 0.40533333rem;
      border-radius: 0.42666667rem;
      box-shadow: 0.08533333rem 0.04266667rem 0.64rem 0.08533333rem
        rgba(0, 0, 0, 0.1);
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