// pages/jiaolianduan/jiaolianduan.js
const app = getApp()

Page({
  data: {
    id: 0,
    nav: ['团操', '训练营', '私教', '我的'],
    tabId:'A',
    array: ['合肥金克斯', '合肥金克斯', '合肥金克斯', '合肥金克斯'],
    index:0,
    // scrollTop: null,
  },

  scroll: function (e) {
    this.setData({ scrollTop: e.detail.scrollTop })
   },

  //事件处理函数
  selectNav: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.id = index
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function (e) {

  },
})