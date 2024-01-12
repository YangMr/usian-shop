import { http } from '@/utils/http'

export type wxLoginParamsType = {
  /**
   * code 通过 wx.login() 获取
   */
  code: string
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  encryptedData: string
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  iv: string
}

export type responseWxLoginType = {
  /**
   * 用户名
   */
  account: string
  /**
   * 用户头像
   */
  avatar: string
  /**
   * 用户id
   */
  id: number
  /**
   * 用户手机号
   */
  mobile: string
  /**
   * 用户昵称
   */
  nickname: null | string
  /**
   * 用于后续接口调用的token，有效期三天
   */
  token: string
}

/**
 * 小程序授权登录接口
 * @param wxLoginParams
 * @returns
 */
export const wxLoginApi = (wxLoginParams: wxLoginParamsType) => {
  return http<responseWxLoginType>({
    url: '/login/wxMin',
    method: 'POST',
    data: wxLoginParams,
  })
}

/**
 * 小程序授权登录接口 -- 测试版的接口
 * @param phoneNumber
 * @returns
 */
export const wxMiniLogin = (phoneNumber: string) => {
  return http<responseWxLoginType>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}
