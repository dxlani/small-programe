<template>
  <div class="counter-warp">
    <p>Mpvue</p>
    <p>ts value {{ ver }}</p>
    <card text="card component"></card>
    <comp-b text="hello2"></comp-b>
    <comp-alias text="hello3"></comp-alias>
    <a :href="AppUrls.COUNTER" class="home">去往vuex</a>
    <a :href="AppUrls.PACKAGE_A" class="home">分包A</a>
    <a href="/pages/testExtend/main" class="home">测试继承</a>
    <span>test</span>
    <div v-for="item in dxl" :key="item">{{item}}</div>
    <view class="group" @click="testclick()">
      <block v-for="item in iconSize" :key="item">
        <icon type="success" :size="item"/>
      </block>
    </view>
    <view class="group">
      <block  v-for="item in iconType" :key="item">
        <icon :type="item" size="40"/>
      </block>
    </view>
    <view class="group">
      <block  v-for="item in iconColor" :key="item">
        <icon type="success" size="40" :color="item"/>
      </block>
    </view>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less" >
  @import "./index";

  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>
