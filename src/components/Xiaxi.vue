<template>
  <div class="xiaxi-continue">
    <div class="header clearfix" @click="go">
      <div class="back">
        <div>返回</div>
      </div>
      <div class="sou clearfix">
        <input type="text" placeholder="哪吒" />
        <button @click="search">搜索</button>
      </div>
    </div>
    <!-- 内容 -->
    <div class="nav-head">
      <p>{{ info.name[0] }}影片</p>
    </div>
    <!-- 视频 -->
    <div class="video">
      <video
        controls
        id="video"
        :src="info.show_url[1][0]"
        style="width: 375px;"
      ></video>
    </div>
    <!-- 反馈 -->
    <div class="feedback">
      <div class="feedback-l">
        <span class="feedback-num">10</span>
        顶一下
      </div>
      <div class="feedback-r">
        <span class="feedback-num">10</span>
        报错
      </div>
    </div>
    <!-- 剧集 -->
    <div class="episodes clearfix">
      <span>
        <a href="#">第一集</a>
      </span>
      <span>
        <a href="#">第二集</a>
      </span>
    </div>
    <!-- 内容简介 -->
    <div class="cont-jianj">
      <p>
        《
        <span id="cont_jianj_name">{{ info.name[0] }}</span>》 内容简介
      </p>
      <div
        class="cont-text"
        id="cont_jianj_text"
        v-html="info.jie_shao"
      ></div>
    </div>
  </div>
</template>
<script>
// http://localhost:8080/static/data.json
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      info:{}
    };
  },
  created() {
    this.getXiaxi();
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
    getXiaxi() {
      this.info = this.$store.state.video[this.id]
      // console.log(this.info)
      // axios
      //   .get("http://localhost:8080/static/data.json")
      //   .then(res => {
      //     console.log(res.data[this.id]);
      //     this.info = res.data[this.id]
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>
<style lang="less" scoped>
.xiaxi-continue {
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
  .nav-head {
    height: 1.984rem;
    line-height: 1.984rem;
    padding-left: 0.448rem;
    background: #fff;
    p {
      font-size: 0.832rem;
      color: #3b4858;
    }
  }
  .video {
    background: #fff;
    width: 100%;
    height: 9.38666667rem;
  }
  .feedback {
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 0.85333333rem;
    .feedback-l {
      text-align: center;
      padding: 0.74666667rem 0;
      .feedback-num {
        display: block;
        color: #fff;
        width: 1.70666667rem;
        height: 1.70666667rem;
        line-height: 1.70666667rem;
        font-size: 0.55466667rem;
        border-radius: 50%;
        background: #3198f3;
        margin-right: 0.42666667rem;
      }
    }
    .feedback-r {
      text-align: center;
      padding: 0.74666667rem 0;
      .feedback-num {
        display: block;
        color: #fff;
        width: 1.70666667rem;
        height: 1.70666667rem;
        line-height: 1.70666667rem;
        font-size: 0.55466667rem;
        border-radius: 50%;
        background: #3198f3;
        margin-right: 0.42666667rem;
      }
    }
  }
  .episodes {
    box-sizing: border-box;
    height: 1.984rem;
    padding: 0.21333333rem 0;
    padding-left: 0.448rem;
    background: #fff;
    margin-bottom: 0.85333333rem;
    span {
      display: inline-block;
      width: 1.92rem;
      height: 1.49333333rem;
      font-size: 0.55466667rem;
      color: #3b4858;
      border: 1px solid #fff;
      border-radius: 26%;
      background: #ffa954;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        line-height: 1.49333333rem;
        text-align: center;
      }
    }
  }
  .cont-jianj {
    background: #fff;
    padding-left: 0.896rem;
    color: #4c3a4a;
    p {
      height: 2.09066667rem;
      line-height: 2.09066667rem;
      font-size: 0.93866667rem;
      border-bottom: 1px solid #f1f1f1;
    }
    .cont-text {
      padding-top: 0.832rem;
      font-size: 0.81066667rem;
      text-indent: 1.28rem;
    }
  }
}
</style>