import config from 'react-native-config'
import fetcher from '../../dataProvider'

export const authLoginSignup = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/login-signup`, data)
}

export const authEmailSignup = async data => {
  return fetcher.post(`${config.API_URL}/v1/user`, data)
}

export const authGoogleLogin = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/login-google-ios`, data)
}

export const authAppleLogin = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/apple-login`, data)
}

export const authLogin = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/login`, data)
}

export const authVerifyOtp = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/login-signup-verify-otp`, data)
}

export const guestAuthLogin = async data => {
  return fetcher.post(`${config.API_URL}/v1/auth/device-login-signup`, data)
}
export const deleteAccount = async userId => {
  return fetcher.delete(`${config.API_URL}/v1/user/${userId}`)
}

export const authVerifyEmail = async token => {
  return fetcher.get(`${config.API_URL}/v1/auth/verify-email?token=${token}`)
}

export const getRefreshToken = async data => {
  return fetcher.post(`${config.API_URL}/v2/auth/refresh-tokens`, data)
}
