// pages/course_wall/course_wall.js
// Page({
//   data: {
//     nbFrontColor: '#000000',
//     nbBackgroundColor: '#ffffff',
//   },
//   onLoad() {
//     this.setData({
//       nbTitle: '新标题',
//       nbLoading: true,
//       nbFrontColor: '#ffffff',
//       nbBackgroundColor: '#000000',
//     })
//   }
// }),

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMore1: false,
    showMore2: false,
    showMore3: false,
    showMore4: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    this.setData({
      nbTitle: '新标题',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
  },

  show_more1: function () {
    this.data.showMore1 = !this.data.showMore1
    this.setData({
      showMore1: this.data.showMore1
    })
  },
  show_more2: function () {
    this.data.showMore2 = !this.data.showMore2
    this.setData({
      showMore2: this.data.showMore2
    })
  },
  show_more3: function () {
    this.data.showMore3 = !this.data.showMore3
    this.setData({
      showMore3: this.data.showMore3
    })
  },
  show_more4: function () {
    this.data.showMore4 = !this.data.showMore4
    this.setData({
      showMore4: this.data.showMore4
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