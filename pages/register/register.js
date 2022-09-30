// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        store_name: "",
        store_phone: "",
        smscode: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    /**
     * 修改店铺名称
     */
    tapToUpdateName(){
        const name = this.data.store_name
        wx.navigateTo({
          url: '../register_shop_name/register_shop_name?name='+name,
        })
    },
    updateStoreName(val){
        this.setData({
            store_name: val
        })
    },

    /**
     * 修改注册手机号
     */
    tapToUpdatePhone(){
        const phone = this.data.store_phone
        wx.navigateTo({
          url: '../register_store_phone/register_store_phone?phone='+phone,
        })
    },
    updateStorePhone(phone,smscode){
        this.setData({
            store_phone: phone,
            smscode: smscode
        })
    },
})