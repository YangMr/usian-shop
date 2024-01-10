<template>
  <view class="page-container">
    <iNavbar />
    <u-swiper :bannerItem="bannerItem" />
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import iNavbar from './components/iNavbar.vue'
import { getBannerApi } from '@/api/index'
import type { responseBannerParamType } from '@/api/types/index-type'
import { ref } from 'vue'

const bannerItem = ref<responseBannerParamType[]>([])
const getBannerList = async () => {
  try {
    const res = await getBannerApi()
    bannerItem.value = res.result
  } catch (error) {
    console.log(error)
  }
}

onLoad(() => {
  getBannerList()
})
</script>

<style></style>
