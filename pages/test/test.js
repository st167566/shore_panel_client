// pages/test/test.js
Page({
    data: {

    },
    onLoad(options) {
        // this.testApi()
    },
    testApi(){
        wx.request({
          url: 'http://localhost:3088/api/addStore',
          method: "GET",
          data: {
              openid:"1"
            // _id:"????",
            // store_id: "1",
            // super_id: null,
            // level_id: 99,
            // store_name: "系统管理员",
            // store_phone: "1",
            // wx_openid: "1",
            // wx_unionid: "1",
            // wx_account: "1",
            // store_logo_img: "",
            // store_wx_img: "",
            // create_timestamp: new Date().getTime(),
            // create_type: 1,
            // last_update_timestamp: new Date().getTime(),
            // today_update_times: 0,
            // status: 1,
            // freezing_reason: "",
          },
          success:(res)=>{
              console.log(res)
          },
          fail:(err)=>{
            console.log(err)
          }
        })
    }
})