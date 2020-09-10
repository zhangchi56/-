// pages/kebiao/kebiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:'A',
    showLayer:false,
    showComment: false,
    appr:'',
    refund:false,
    today:'08.19',
    sevenday:'08.26',
  },


  select:function(e){
    var select = e.currentTarget.dataset.select;
    this.setData({
      select: select,
    });
  },
  close_layer: function () {
    this.setData({
      showLayer: false,
      showComment: false,
      refund: false
    })
  },
  comment: function (e) {
    var appr = e.currentTarget.dataset.appr;
    if (appr != this.data.appr) {
      this.setData({
        appr: appr,
      });
    }
  },
  handle_comment:function(){
    this.setData({
      showLayer: true,
      showComment: true
    })
  },
  close_comment:function(){
    this.setData({
      showLayer: false,
      showComment: false
    })
  },
  // 退款
  refund:function(){
    this.setData({
      refund: true,
      showLayer: true,
    })
  },
  // 关闭退款
  close_refund: function () {
    this.setData({
      showLayer: false,
      refund: false
    })
  },
  seeMap: function () {
    wx.openLocation({
      latitude: 31.8512,
      longitude: 117.26061,
      scale: 18,
      name: '合肥金克斯',
      address: '合肥市蜀山区人民政府大楼'
    })
  },
  // 课程预约按钮的跳转
  hanldMake(){
    console.log("预约")
    wx.navigateTo({
      url: '/pages/order_yuyue/order_yuyue',
    });
      
  },
  //点击教练头像和任意处跳转教练墙
  hanldCoach(){
    wx.navigateTo({
      url: '/pages/coach_wall/coach_wall',
    });
  },
  tuikuan(){
    console.log("确认退款")
  CloudPay.refund()
  },
    //点击选位按钮进入选位界面
    xuanwei(){
      wx.navigateTo({
        url: '/pages/order_xuanwei/order_xuanwei',
      });
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
