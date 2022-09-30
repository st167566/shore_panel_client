// pages/register_shop_name/register_shop_name.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bottomLine: '',
        store_name: "1"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            store_name: options.name
        })
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
     * focus时变色
     */
    onFocus(){
        this.setData({
            bottomLine: 'input-line-focus'
        })
    },

    /**
     * blur时还原
     */
    onBlur(){
        this.setData({
            bottomLine: ''
        })
    },

    /**
     * 点击确定
     */
    onSubmit(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        prevPage.updateStoreName(
            this.data.store_name
        )
        wx.navigateBack();
    },
    changeName(e){
        this.setData({
            store_name: e.detail.value
        })
    }
})