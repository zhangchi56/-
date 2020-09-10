// pages/coach_wall/coach_wall.js
const app = getApp()
Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    select:'A',
    moreIntr:false,
    moreComment:false,
    tip:'查看更多',
    id: 0,
    titleID: 0,
    nav: ['团操', '私教', '训练营'],
  },
  //事件处理函数
  select: function (e) {
    console.log(e)
    var select = e.currentTarget.dataset.select;
    if (select != this.data.select) {
      this.setData({
        select: select,
      });
    }
  },
  more_intr:function(){
    this.setData({
      moreIntr: false
    })
  },
  more_comment: function () {
    var moreComment = this.data.moreComment
    var tip=this.data.moreComment
    moreComment = !moreComment
    if (moreComment==false){
      tip='查看更多'
    }else{
      tip = '收起评论'
    }
    this.setData({
      moreComment: moreComment,
      tip:tip
    })
  },
  selectTab: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.id = index
    this.setData({
      id: index
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
  toChat:function(e){
    wx.navigateTo({
      url:'/pages/chat/chat'
    })
  },
  onLoad: function (e) {
  },
  onReady() {
    setTimeout(() => {
      let query = wx.createSelectorQuery();
      query.select('.intr').boundingClientRect(rect => {
        if (rect.height>48){
          this.setData({
            moreIntr: true
          })
        }

      }).exec();
    }, 300)
  }
})