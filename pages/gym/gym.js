// pages/gym/gym.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: ['./images/banner1.png',
      './images/banner1.png',
      './images/banner1.png',
    ],
    showMore:false,
  },

  navigationback:function (){
  wx.navigateBack({
    delta: 0,
  })
  },

  //
  seeMap: function () {
    wx.openLocation({
      latitude: 55,
      longitude: 110,
      scale: 18,
      name: "合肥金克斯",
      address: "合肥市蜀山区人民政府大楼",
    });
  },

  show_more:function(){
    this.data.showMore = !this.data.showMore
    this.setData({
      showMore: this.data.showMore
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