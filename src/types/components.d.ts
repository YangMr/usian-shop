// src/types/components.d.ts
import UTest from '@/components/u-test/index.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UTest: typeof UTest
  }
}
