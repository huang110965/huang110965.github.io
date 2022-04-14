import axios from 'axios'
export const baseUrl = import.meta.env.BASE_URL
console.log(import.meta.env, 'baseUrl');
const instance = axios.create({
  baseURL: baseUrl,
  timeout: '100000',
  method: 'POST',
  data: {},
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'timestamp': new Date().getTime(),
    'Cookie': sessionStorage.getItem('__Token__')
  }
})
//请求拦截器
instance.interceptors.request.use(config => {
  console.log(config);
  return config
})
//响应拦截器
instance.interceptors.response.use(res => {

}, err => {
  console.log(err);
  return Promise.reject(err)
})
export default instance