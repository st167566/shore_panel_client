// index.js
import lottie from 'lottie-miniprogram'
import {data} from './data.js'
// 获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    screenHeight: app.globalData.screenHeight,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // 开启监听
    app.watch('isLogined',this.watchBack);
    // lottie动画
    wx.createSelectorQuery().select('#canvas').node(res => {
        const canvas = res.node
        const context = canvas.getContext('2d')
        canvas.width = 300
        canvas.height = 300
        lottie.setup(canvas)//要执行动画，必须调用setup,传入canvas对象
        lottie.loadAnimation({//微信小程序给的接口
            loop: true,//是否循环播放（选填）
            autoplay: true,//是否自动播放（选填）
            animationData: data, // 读取本地json文件
            rendererSettings:{
                context
            }       
        })
        }).exec()
  },
  watchBack(){
    const { isLogined, hasRegister } = app.globalData
    if(isLogined){
        wx.redirectTo({
          url: hasRegister? '../dashboard/dashboard' : '../introduce/introduce'
        })
    }
  },
  // 假装登录了
  testHasRegister(e){
      console.log(e.currentTarget.dataset.payload)
    app.globalData.hasRegister = e.currentTarget.dataset.payload;
    app.globalData.isLogined = true;
  }
})
