<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <!-- <text class="title">{{ title }} 123 456</text>

      <u-test></u-test>

      {{ store.token }} -->

      <button @click="handleSave">storage</button>
    </view>
  </view>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const title = ref("Hello");

// import { useUserStore } from "@/stores/user";
// const store = useUserStore();
import { http } from "@/utils/http";

const handleSave = () => {
  // store.setToken();
  // uni.request({
  //   url: "/driver/tasks/list",
  //   method: "GET",
  //   data: {
  //     page: 1,
  //     pageSize: 5,
  //     status: 1,
  //   },
  // });
  ///driver/tasks/list
  http({
    url: "/driver/tasks/list",
    method: "GET",
    data: {
      page: 1,
      pageSize: 5,
      status: 1,
    },
    header: {
      a: 1,
    },
  }).then((res) => {
    console.log("res====>1", res.data);
  });

  //https:/ / slwl - api.itheima.net / driver / tasks / list;
  http({
    url: "https://slwl-api.itheima.net/driver/tasks/list",
    method: "GET",
    data: {
      page: 1,
      pageSize: 5,
      status: 1,
    },
    header: {
      b: 2,
    },
  }).then((res) => {
    console.log("res====>2", res);
  });

  // uni.request({
  //   url: "https://slwl-api.itheima.net/driver/tasks/list",
  //   method: "GET",
  //   data: {
  //     page: 1,
  //     pageSize: 5,
  //     status: 1,
  //   },
  // });
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
