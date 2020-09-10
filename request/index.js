// 同时发送异步代码的次数
let ajaxTimes=0;
export const zcRequest=(params)=>{
  // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
  let header={...params.header};
  if(params.url.includes("/my/")){
    // 拼接header 带上token
    header["Authorization"]=wx.getStorageSync("token");
  }


  ajaxTimes++;
  // 显示加载中 效果
  wx.showLoading({
    title: "加载中",
    mask: true
  });


  // 定义公共的url
  const baseUrl="https://yueke.axh5.com/";
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     header:header,
     url:baseUrl+params.url,
     success:(result)=>{
       resolve(result);
     },
     fail:(err)=>{
       reject(err);
     },
     complete:()=>{
      ajaxTimes--;
      if(ajaxTimes===0){
        //  关闭正在等待的图标
        wx.hideLoading();
      }
     }
    });
  })
}

// export const zcRequest = (params) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       ...params,
//       success: (result) => {
//         resolve(result);
//       },
//       fail: (err) => {
//         reject(err);
//       }
//     })
//   })
// }