// pages/shiyan/shiyan.js
Page({
  /**
   * 页面的初始数据
   */
  data: {   
    tabs: ["招聘中", "未发布"],    
    navi: 0,       //这里是为了方便我做头部切换样式定义的    
    list: [],      //声明一个list，用来存放我们要请求的数据，也就是先给它一个碗，你需要放什么东西在这个碗里，通过后面请求的参数值来决定  
    },  
    getlist() {     //这里我封装了请求，如果你不需要多次利用到这个请求就不需要像我这样封装，需要在哪里请求就在哪里写这个请求               var that = this,   //避免this指向不明，在小程序里面常常会这样做      
    navi;   
    if (this.data.navi == 0) {    //这里的this.data.navi是我上面data里面声明的navi     
     navi = 1      //上线和未上线后台给了我is_online=1或者0，我将招聘中的navi=0    
     } else {      
     navi = 0    
     }    
     wx.request({      
       url: app.globalData.url +'/rc/Position/release_list?is_online='+navi,   //字符串拼接传递参数，当is_online=navi,也即是 is_online等于0请求未发布的数据，等于1请求招聘中的数据   
      // （app.globalData.url 就是你开发的域名，只不过我们在全局app.js里面封装了这个域名便于后面的维护）      
      header: {       
       'content-type': 'application/json' // 默认值     
       },      
       success(res) {       
        that.setData({         
         list: res.data.data  //我要将list这个碗里放入后台请求的is_online=0或者1这些东西        
         })      
         }   
          })  
          },
        onLoad: function (options) {    
       this.getlist();    //进入页面就要显示已经请求完了的数据，所以要把getlist（）放在onLoad里面 
     },
     data: {
      // array: ['美国', '中国', '巴西', '日本'],
      // objectArray: [
      //   {
      //     id: 0,
      //     name: '美国'
      //   },
      //   {
      //     id: 1,
      //     name: '中国'
      //   },
      //   {
      //     id: 2,
      //     name: '巴西'
      //   },
      //   {
      //     id: 3,
      //     name: '日本'
      //   }
      // ],
      // index: 0,
      // multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      // objectMultiArray: [
      //   [
      //     {
      //       id: 0,
      //       name: '无脊柱动物'
      //     },
      //     {
      //       id: 1,
      //       name: '脊柱动物'
      //     }
      //   ], [
      //     {
      //       id: 0,
      //       name: '扁性动物'
      //     },
      //     {
      //       id: 1,
      //       name: '线形动物'
      //     },
      //     {
      //       id: 2,
      //       name: '环节动物'
      //     },
      //     {
      //       id: 3,
      //       name: '软体动物'
      //     },
      //     {
      //       id: 3,
      //       name: '节肢动物'
      //     }
      //   ], [
      //     {
      //       id: 0,
      //       name: '猪肉绦虫'
      //     },
      //     {
      //       id: 1,
      //       name: '吸血虫'
      //     }
      //   ]
      // ],
      // multiIndex: [0, 0, 0],
      // date: '2016-09-01',
      // time: '12:01',
      region: ['广东省', '广州市', '海珠区'],
      // customItem: '全部'
    },
    // bindPickerChange: function(e) {
    //   console.log('picker发送选择改变，携带值为', e.detail.value)
    //   this.setData({
    //     index: e.detail.value
    //   })
    // },
    // bindMultiPickerChange: function (e) {
    //   console.log('picker发送选择改变，携带值为', e.detail.value)
    //   this.setData({
    //     multiIndex: e.detail.value
    //   })
    // },
    // bindMultiPickerColumnChange: function (e) {
    //   console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    //   var data = {
    //     multiArray: this.data.multiArray,
    //     multiIndex: this.data.multiIndex
    //   };
    //   data.multiIndex[e.detail.column] = e.detail.value;
    //   switch (e.detail.column) {
    //     case 0:
    //       switch (data.multiIndex[0]) {
    //         case 0:
    //           data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
    //           data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
    //           break;
    //         case 1:
    //           data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
    //           data.multiArray[2] = ['鲫鱼', '带鱼'];
    //           break;
    //       }
    //       data.multiIndex[1] = 0;
    //       data.multiIndex[2] = 0;
    //       break;
    //     case 1:
    //       switch (data.multiIndex[0]) {
    //         case 0:
    //           switch (data.multiIndex[1]) {
    //             case 0:
    //               data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
    //               break;
    //             case 1:
    //               data.multiArray[2] = ['蛔虫'];
    //               break;
    //             case 2:
    //               data.multiArray[2] = ['蚂蚁', '蚂蟥'];
    //               break;
    //             case 3:
    //               data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
    //               break;
    //             case 4:
    //               data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
    //               break;
    //           }
    //           break;
    //         case 1:
    //           switch (data.multiIndex[1]) {
    //             case 0:
    //               data.multiArray[2] = ['鲫鱼', '带鱼'];
    //               break;
    //             case 1:
    //               data.multiArray[2] = ['青蛙', '娃娃鱼'];
    //               break;
    //             case 2:
    //               data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
    //               break;
    //           }
    //           break;
    //       }
    //       data.multiIndex[2] = 0;
    //       break;
    //   }
    //   console.log(data.multiIndex);
    //   this.setData(data);
    // },
    // bindDateChange: function(e) {
    //   console.log('picker发送选择改变，携带值为', e.detail.value)
    //   this.setData({
    //     date: e.detail.value
    //   })
    // },
    // bindTimeChange: function(e) {
    //   console.log('picker发送选择改变，携带值为', e.detail.value)
    //   this.setData({
    //     time: e.detail.value
    //   })
    // },
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

