import API from './api/index'

function staticVisitorInfo() {

  API.doVisitorStatic().then(res => {
  }).catch(e => {
    console.log("error:", e)
  })
}



export default {
  staticVisitorInfo,
}