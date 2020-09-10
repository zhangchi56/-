// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLayer: false,
    openCard: false,
    imgUrls: [
       '/images/juxing.png',
      '/images/juxing.png',
      '/images/juxing.png',
    ],
    swiperIndex:1,
    beforeColor: "white",//指示点颜色
    afterColor: "coral"//当前选中的指示点颜色
  },
  swiperChange(e) {
    const that = this;
    console.log(e.detail.current)
    that.setData({
      swiperIndex: e.detail.current,
    })
  },
  close_card: function () {
    this.setData({
      showLayer: false,
      openCard: false
    })
  },
  vipXx(){
    console.log("战卡特权")
    wx.navigateTo({
      url: 'pages/vip_rights/vip_rights',
    })   
  },
  //点击进入聊天
  // chat(){
  //   wx.navigateTo({
  //     url: 'pages/chat/chat',
  //   });
  // },
  // 点击开通战卡
  open_card: function () {
    this.setData({
      openCard: true,
      showLayer: true,
    })
  },
  // 关闭
  close_layer: function () {
    this.setData({
      showLayer: false,
      openCard: false
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})