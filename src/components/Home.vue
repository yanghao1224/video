<template>
  <div class="home-continue">
    <!-- logo -->
    <div class="logo">
      <a href="#"></a>
    </div>
    <!-- 搜索 -->
    <sousuo></sousuo>
    <!-- 引导 -->
      <div class="guie" ref="scale" @click="more" >
        <div class="round">更多火爆影视--></div>
      </div>
  </div>
</template>
<script>
import Sousuo from '@/components/child/Sousuo'
export default {
  data() {
    return {
      dong:false,
    }
  },
  methods: {
    more(){
      this.$router.push("/more");
    }
  },
  mounted() {
    var num = 1;
    var scale = this.$refs.scale
    setInterval(() => {
      num +=0.01
      num >1.4? num = 0.4 :false
      scale.style.transform=`scale(${num})`
    }, 100/60);
  },
  components:{
    Sousuo
  }
};
</script>
<style lang="less" scoped>
.home-continue {
  width: 14rem;
  height: 16rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  .logo {
    width: 100%;
    margin-bottom: 2rem;
    a {
      display: block;
      height: 3rem;
      text-align: center;
      font-size: 1rem;
      line-height: 3rem;
      background: url(http://140.143.206.157:8080/static/public/img/logo.png)
        no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
  .sousuo {
    width: 100%;
    padding: 0.2rem 0.1rem;
    border-radius: 1.152rem;
    border: 1px solid #ffffff;
    transition: 0.2s box-shadow;
    input {
      float: left;
      box-sizing: border-box;
      width: 76%;
      height: 1.984rem;
      font-size: 0.707407rem;
      color: #fff;
      background: #ff8d1b;
      padding: 0.42666667rem 0.512rem;
      border-radius: 1.152rem 0 0 1.152rem;
    }
    button {
      float: left;
      width: 24%;
      height: 1.984rem;
      background: #181717;
      color: #fff;
      font-size: 0.64740741rem;
      border-radius: 0 1.152rem 1.152rem 0;
    }
  }
  .guie{
    width: 7rem;
    height: 2rem;
    background: #ff8d1b;
    position: relative;
    border-radius: 50px;
    margin: 2.4rem auto 0;
    text-align: center;
    line-height: 2rem;
    font-size: 0.6186666rem;
    transition: all .6s;
    .round{
      color: #fff;
      
    }
  }
  
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>