// pages/my_team/my_team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:false,
    showAll:false,
    more:true,
    showLayer: false,
    changeName: false,
    changTarget:false,
  },
  change_target: function () {
    // console.log("修改")
    this.setData({
      changTarget: true,
      showLayer: true,
    })
  },
  close_changeTarget: function () {
    this.setData({
      showLayer: false,
      changeTarget: false
    })
  },
  close_layer: function () {
    this.setData({
      showLayer: false,
      changeTarget: false
    })
  },
  // 本战队成员点击战队名称修改
  change_name: function () {
    // console.log("修改")
    this.setData({
      changeName: true,
      showLayer: true,
    })
  },
  // 关闭修改名称弹框
  close_changeName: function () {
    this.setData({
      showLayer: false,
      changeName: false
    })
  },
  close_layer: function () {
    this.setData({
      showLayer: false,
      changeName: false
    })
  },
  show_all:function (){
    console.log("查看全部排名")
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