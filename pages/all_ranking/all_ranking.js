// pages/all_ranking/all_ranking.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    select:'total',
    // provinces: ['安徽省', '北京市', '上海市', '江苏省'],
    // citys: ['选择市','合肥市', '阜阳市', '黄山市', '池州市'],
    // districts: ['选择区','蜀山区', '庐阳区', '瑶海区', '高新区'],
    // index1: 0,
    // index2: 0,
    // index3: 0,
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  select:function(e){
    var select = e.currentTarget.dataset.select;
    if (select != this.data.select) {
      this.setData({
        select: select,
      });
    }
  },
  select_province:function(e){
    this.setData({
      index1: e.detail.value
    })
  },
  select_city: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  select_district: function (e) {
    this.setData({
      index3: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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