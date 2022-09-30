// app.js
App({
  onLaunch() {
    // 获取页面高度等信息
    wx.getSystemInfo({
        success: res => {
          //导航高度
          console.log(res)
          this.globalData.statusBarHeight = res.statusBarHeight;
          this.globalData.screenHeight = res.screenHeight;
        }, fail(err) {
          console.log(err);
        }
      })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        this.globalData.userInfo = res.code
        setTimeout(() =>{
            // this.globalData.hasRegister = false
            // this.globalData.isLogined = true
        },1000)
      }
    })
  },
  globalData: {
    // 是否已登录(loading状态)
    isLogined: false,
    // 是否已注册过了(进入哪个页面)
    hasRegister: false,
    // 店铺信息(注册过才有)
    storeInfo: null,
    // 经销商ID
    distributorID: "",
    // 顶部状态栏高度
    screenHeight: 0,
    // 页面总体高度
    windowHeight: 0,
  },
  // 页面上使用 watch
  setWatcher(page) {
    let data = page.data
    let watch = page.watch
    //如果watch是以对象写法传进来，遍历watch拿到每一项属性
    for (var i in watch) {
      let watchArr = i.split('.') // 将watch中的属性以'.'切分成数组
      let oldData = data; // 将data赋值给oldData
      let watchFun = watch[i].handler || watch[i]; // 兼容带handler和不带handler的两种写法
      let deep = watch[i].deep; // 若未设置deep,则为undefine
      this.observe(oldData, watchArr, watchFun, deep, page); // 监听nowData对象的lastKey

    }
  },
  observe(obj, key, watchFun, deep, page) {
    let val = obj[key]
    // 判断deep是true 且 val不能为空 且 typeof val==='object'（数组内数值变化也需要深度监听）
    if (deep && val != null && typeof val === 'object') {
      for (let i in val) {
        this.observe(val, i, watchFun, deep, page); // 递归调用监听函数
      }
    }
    let that = this
    Object.defineProperty(obj, key, {
      configurable: true,//属性可配置
      enumerable: true,//可以被枚举
      set: function (value) {
        // 用page对象调用,改变函数内this指向,以便this.data访问data内的属性值
        watchFun.call(page, value, val); // value是新值，val是旧值
        val = value;
        if (deep) { // 若是深度监听,重新监听该对象，以便监听其属性。
          that.observe(obj, key, watchFun, deep, page);
        }
      },
      get: function () {
        return val;
       }
    })
  },
  // 监听全局变量的变化
  watch(variate, method) {
    var obj = this.globalData;
    let val = obj[variate];// 单独变量来存储原来的值
    Object.defineProperty(obj, variate, {
      configurable: false,
      enumerable: true,
      set: function (value) {
        val = value;// 重新赋值
        method(variate,value);// 执行回调方法
      },
      get: function () {
        // 在其他界面调用getApp().globalData.variate的时候，这里就会执行。
        return val; // 返回当前值
      }
    })
  }
})
