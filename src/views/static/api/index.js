import axios from "@/axios/axios";

function doVisitorStatic(param) {
  return axios({
    url: '/account/doVisitorStatic',
    headers: {
      isToken: true,
    },
    method: 'post',
    data: param
  })
}

export default {
  doVisitorStatic,
}