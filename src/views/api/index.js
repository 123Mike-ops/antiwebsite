import axios from "@/axios/axios";
const scope = "server";

function getNews(searchName, pageInfo) {
const pageIndex = pageInfo.pageIndex - 1;

  return axios({
    url: "/getNewsPublic?st="+searchName+"&ps="+pageInfo.pageSize+"&pi="+pageIndex,
    headers: {
      isToken: false,
    },
    method: "post",
    data: pageInfo,
  });
}

function getNewsDetail(id) {
  return axios({
    url: '/getNews/' + id,
    headers: {
      isToken: true,
    },
    method: 'post',
    
    data: {id:id}
  })
}
function getNewsCategory(param){
  return axios({
    url: '/getNewsCategories',
    headers: {
      isToken: true,
    },
    method: 'post',
    
    data: param
  })
}


function getDoctor(param) {
  const grant_type = "password";

  return axios({
    url: "/hospital/getDoctor",
    headers: {
      isToken: true,
    },
    method: "post",
    data: param,
  });
}

function getlatestNews(param) {
  const grant_type = "password";

  return axios({
    // url: "/hospital/getlatestNews",
    url: "/getNewsPublic?st="+''+"&ps="+'10'+"&pi="+'0',
    headers: {
      isToken: true,
    },
    method: "post",
    data: param,
  });
}

function postContactMessage(param){
  return axios({
    url: "/contact/putMessage",
    method: "post",
    data: param,
  });

}
function subscribe(email) {
  const body={email:email}
  return axios({
    url: '/subscribe',
    method: 'post',
    data: body
  })
}

export default {
  getNews,
  getDoctor,
  getNewsDetail,
  getNewsCategory,
  getlatestNews,
  postContactMessage,
  subscribe
};
