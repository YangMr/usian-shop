import { defineStore } from 'pinia'
import { persist } from '../index'
import type { responseWxLoginType } from '@/api/login'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    // 保存用户信息
    const userInfo = ref<responseWxLoginType>()

    // 存储用户信息
    const setUserInfo = (info: responseWxLoginType) => {
      userInfo.value = info
    }

    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    persist: persist(),
  },
)
