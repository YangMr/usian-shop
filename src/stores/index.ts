import {createPinia}  from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)



export const persist = () => {
  return {
    paths : ["token"],
    storage : {
      setItem(key:string, value:any) {
        uni.setStorageSync(key, value)
      },
      getItem(key:string) {
        return uni.getStorageSync(key)
      }
    }
  }
}
