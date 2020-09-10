//index.js
import {
  zcRequest
} from "../../request/index.js"
//获取应用实例
const app = getApp();
var request = require("../../utils/request");
import {
  myRequest
} from "../../utils/myRequest.js";
var util = require("../../utils/util");

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    banner: [
      "./images/banner1.png",
      // "./images/banner1.png",
      // "./images/banner1.png",
    ],
    showCity: false,
    showFilter: false,
    id: 0,
    titleID: 0,
    nav: ["团操", "私教", "训练营", "场馆包"],
    titles: ["场馆", "课程", "时段"],
    type: "团操",
    city: "合肥",
    citys: [
      "南京市",
      "南京市",
      "南京市",
      "南京市",
      "南京市",
      "南京市",
      "南京市",
      "南京市",
    ],
    goodsList: [], //初始数据
    courseList: [],
    date: [],
    starttime: "",
    endtime: "",
    //筛选场馆、课程时段
    venueDistrict: [{
        id: 1,
        name: '全城',
        value: '',
        isActive: true,
      },
      {
        id: 2,
        name: '天河区',
        value: '',
        isActive: false,
      },
      {
        id: 3,
        name: '越秀区',
        value: '',
        isActive: false,
      },
      {
        id: 4,
        name: '番禺区',
        value: '',
        isActive: false,
      },
      {
        id: 5,
        name: '白云区',
        value: '',
        isActive: false,
      },
    ],
    //场馆门店全选判断条件
    venueStoresAllSure:false,
    //场馆门店
    venueStores: [{
      id: 1,
      name: '全部',
      value: '',
      isActive: true,
    }, {
      id: 2,
      name: '上海梅林全能店',
      value: '',
      isActive: false,
    }, {
      id: 3,
      name: '北京梅林全能店',
      value: '',
      isActive: false,
    }, {
      id: 4,
      name: '广州梅林全能店',
      value: '',
      isActive: false,
    }],
    //场馆多选列表
    selVenueStores:[],
    //课程目标
    courseObjectives: [{
      id: 1,
      name: '燃脂',
      value: '',
      isActive: true,
    }, {
      id: 2,
      name: '塑形',
      value: '',
      isActive: false,
    }],
    //课程类型
    courseType: [{
      id: 1,
      name: '单车',
      value: '',
      isActive: true,
    }, {
      id: 2,
      name: '瑜伽',
      value: '',
      isActive: false,
    }],
    timeLine: [{
        id: 1,
        name: '全部时段',
        value: '',
        isActive: true,
      },
      {
        id: 2,
        name: '06:00-09:00',
        value: '',
        isActive: false,
      },
      {
        id: 3,
        name: '09:00-12:00',
        value: '',
        isActive: false,
      },
      {
        id: 4,
        name: '12:00-14:00',
        value: '',
        isActive: false,
      },
      {
        id: 5,
        name: '14:00-18:00',
        value: '',
        isActive: false,
      },
      {
        id: 6,
        name: '18:00-22:30',
        value: '',
        isActive: false,
      }
    ]
    //
  },
  //事件处理函数
  selectTab: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.id = index;
    this.setData({
      id: index,
    });
    var type = e.currentTarget.dataset.type;
    this.setData({
      type: type
    })
    let starttime = e.currentTarget.dataset.time ? e.currentTarget.dataset.time : util.getToday();
    let endtime = util.getNextDay(starttime);
    let city = this.data.city;
    console.log(starttime)
    this.getCourse(type, city, starttime, endtime);
  },
  selectTitle: function (e) {
    var index = e.currentTarget.dataset.index;
    this.data.titleID = index;
    this.setData({
      titleID: index,
    });
  },
  handle_filter: function () {
    this.setData({
      showFilter: true,
    });
  },
  handle_confirm: function () {
    this.setData({
      showFilter: false,
    });
  },
  close_layer: function () {
    this.setData({
      showFilter: false,
    });
  },
  selectCity: function () {
    var showCity = this.data.showCity;
    showCity = !showCity;
    this.setData({
      showCity: showCity,
    });
  },
  seeMap: function () {
    wx.openLocation({
      latitude: 31.8512,
      longitude: 117.26061,
      scale: 18,
      name: "合肥金克斯",
      address: "合肥市蜀山区人民政府大楼",
    });
  },
  // 课程预约按钮的跳转
  hanldMake() {
    console.log("预约")
    wx.navigateTo({
      url: '/pages/order_yuyue/order_yuyue',
    });
  },
  // change:function(){
  //   var that=this;
  //  wx.request({
  //    url: '',
  //    success:function(res){
  //      that.setData({
  //        city:res.data
  //      })
  //    }
  //  })
  // },
  // 请求课程接口
  // getCourse: function (type) {
  //   // let res = myRequest({
  //   //   url: "api/v1/index/getCourse",
  //   //   data:{
  //   //     type: type,
  //   //     city: "合肥",
  //   //     starttime:"2020-8-10",
  //   //     endtime:"2020-8-20"
  //   //   }
  //   // });
  //   let data = {
  //     type: type,
  //     city: "合肥",
  //     starttime: "2020-8-10",
  //     endtime: "2020-8-20"
  //   };
  //   let res = request.get("api/v1/index/getCourse", data)
  //   console.log(res);
  //   // let courseList = res.data
  //   // this.setData({
  //   //   courseList:courseList
  //   // })
  // },
  getCourse(type, city, starttime, endtime) {
    type = type ? type : '团操';
    this.setData({
      type: type
    })
    starttime = starttime ? starttime : util.getToday();
    endtime = endtime ? endtime : util.getNextDay(starttime);
    city = city ? city : this.data.city;
    zcRequest({
      url: "/api/v1/index/getCourse",
      data: {
        type: type,
        city: city,
        starttime: starttime,
        endtime: endtime
      }
    }).then(result => {
      console.log(result)
      this.setData({
        courseList: result.data.data
      })
    })
  },

  //筛选场馆、课程、时段单选按钮选中
  selectBtn: function (e) {
    let index = e.currentTarget.dataset.index
    let type = e.currentTarget.dataset.type
    let needType = this.data[type]
    needType.forEach((v, i) => {
      i == index ? v.isActive = true : v.isActive = false
    })
    this.setData({
      [type]: needType
    })
  },
  //筛选场馆、课程、时段多选按钮选中
  multipleSelectBtn: function (e) {
    let index = e.currentTarget.dataset.index
    let venueStores = this.data.venueStores
    let selVenueStores = this.data.selVenueStores
    let item = venueStores[index]
    console.log(index)
    if(item.isActive == false){
      item.isActive = true
      selVenueStores.push(item)
    }else{
      item.isActive = false
      let index2 = selVenueStores.findIndex(i =>{i.id == item.id})
      // itemBoolean = !itemBoolean
      // let index2 = selVenueStores.indexOf(index)
      selVenueStores.splice(index2,1)
    }
    
    console.log(venueStores)
    console.log(selVenueStores)
    console.log(selVenueStores.length == venueStores.length)
    this.setData({
      venueStores:venueStores
    })
    // console.log(venueStores)
  },
  onLoad: function (e) {
    this.getDatesList();
    this.getCourse('团操');
    // zcRequest({
    //   url: "/api/v1/index/getCourse",
    // }).then(result => {
    //   console.log(result)
    // })
  },
  getDatesList: function () {
    var date = util.getDates(7);
    this.setData({
      date: date
    })
  },
  getTime: function (e) {
    let starttime = e.currentTarget.dataset.time;
    let endtime = this.getNextDay(starttime);
    this.setData({
      starttime: starttime,
      endtime: endtime
    })
  },
  getNextDay: function (starttime) {
    let nextday = util.getNextDay(starttime);
    return nextday;
  }

})