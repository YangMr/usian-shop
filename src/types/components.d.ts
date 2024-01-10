// src/types/components.d.ts
import uSwiper from '@/components/u-swiper.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    uSwiper: typeof uSwiper
  }
}
