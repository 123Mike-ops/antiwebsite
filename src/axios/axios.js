import axios from 'axios'
import {serialize} from '@/util/util'

 
const request = axios.create({
  baseURL: '/api', 
  timeout: 120000,
  withCredentials: true,
})

let isRefreshing = false;
let refreshSubscribers = [];

request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  const isToken = (config.headers || {}).isToken === false
  let user = JSON.parse(localStorage.getItem('user')) ; //JSON.parse(localStorage.getItem('user'));
  if (user&&user.accessToken && !isToken) {
    config.headers['x-access-token'] = user.accessToken// token
  }
  // headers中配置serialize为true开启序列化
  if (config.methods === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }
  return config
  }, error => {
  return Promise.reject(error)
})
  
const handleError = async(error) => {
 console.log(error)
  return Promise.reject(error);
};

request.interceptors.response.use(
  response => {
    let res = response.data;
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res;
  },
  error => handleError(error)
)
 
 
export default request