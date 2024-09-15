import request from ".";

export const getHome = ()=> {
  return request({
    method: 'get',
    url: "/api/v1/we_goods"
  })
}

