import { useUserStore } from '@/stores/user'
import type { dataType } from './types/responseDataType'
// 接口的公共地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 定义拦截器
const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    if (!config.url.startsWith('http')) {
      config.url = baseURL + config.url
    }

    config.header = {
      ...config.header,
      'source-client': 'miniapp',
    }

    // 发送token
    const store = useUserStore()
    if (store.token) {
      config.header.Authorization = store.token
    }

    return config
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('upload', httpInterceptor)

export const http = <T = any>(options: UniApp.RequestOptions) => {
  return new Promise<dataType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        console.log('aaaa:', res)
        // 请求成功，状态码是200的处理
        if (res.statusCode === 200) {
          if ((res.data as dataType<T>).code === '1') {
            return resolve(res.data as dataType<T>)
          }
          _showToast(res.data as dataType<T>)
        }

        // token过期, 清空token, 重新跳转到登录页
        if (res.statusCode === 401) {
          const store = useUserStore()
          store.token = ''

          // 跳转到登录也
          uni.navigateTo({ url: '/pages/login/login' })

          // 将错误返回出去
          return reject(res)
        }

        _showToast(res.data as dataType<T>)
        reject(res)
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        reject(err)
      },
    })
  })
}

const _showToast = (res: dataType<any>) => {
  uni.showToast({
    icon: 'none',
    title: res.data.msg || '请求错误',
  })
}
