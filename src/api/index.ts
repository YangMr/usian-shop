import { http } from '@/utils/http'
import type { bannerParamType, responseBannerParamType } from './types/index-type'

/**
 * 首页-广告区域
 * @param bannerParams
 * @returns
 */
export const getBannerApi = (bannerParams?: bannerParamType) => {
  return http<responseBannerParamType[]>({
    url: '/home/banner',
    method: 'GET',
    data: bannerParams,
  })
}
