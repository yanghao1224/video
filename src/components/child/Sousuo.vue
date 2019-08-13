<template>
  <div class="sousuo clearfix">
    <input type="text" placeholder="哪吒" v-model="msg" ref="text"/>
    <button @click="search">搜索</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:''
    }
  },
  methods: {
    //点击跳转到search页面
    search(){
      this.$router.push("/search?name="+this.$refs.text.value)
      // console.log(this.$refs.text.value)
    }
  },
};
</script>
<style lang="less" scoped>
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
</style>