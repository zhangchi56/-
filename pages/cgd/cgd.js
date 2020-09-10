// pages/cgd/cgd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    nav: ['排课', '课程包', '场馆包', '选位表', '信息'],
    array: ['店长', '财务', '场馆运营', '前台'],
    index: 0,
    tabId: 'A',
    tabId2: 'a',
    array2: ['合肥金克斯', '合肥金克斯2', '合肥金克斯3', '合肥金克斯4'],
    array3: ['教室名称', '教室名称2', '教室名称3']
  },
  selectNav: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.data.id = index
    console.log(this.data.id)
    this.setData({
      id: index
    })
  },
  selectTab: function (e) {
    var tabId = e.currentTarget.dataset.select;
    this.setData({
      tabId: tabId
    })
  },
  selectTab2: function (e) {
    var tabId2 = e.currentTarget.dataset.select;
    this.setData({
      tabId2: tabId2
    })
  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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