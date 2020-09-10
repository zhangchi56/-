const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

//获取d当前时间多少天后的日期和对应星期
function getDates(days) {
    var dateArry = [];
    var today = getToday();
    for (var i = 0; i < days; i++) {
      var dateObj = dateLater(today, i);
      dateArry.push(dateObj)
    }
    return dateArry;
}

/**
 * 传入时间后几天
 * param：传入时间：dates:"2018-04-02",later:往后多少天
 */
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('日', '一', '二', '三', '四', '五', '六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  dateObj.year = date.getFullYear();
  dateObj.month = date.getMonth() + 1;
  dateObj.day = date.getDate();
  dateObj.time = dateObj.year + "-" + dateObj.month + "-" + dateObj.day;
  dateObj.monthday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()  == getToday() ? '今天' : date.getMonth() + 1 + "." + date.getDate();
  dateObj.weekday = show_day[day];
  return dateObj;
}

//获取当前时间
function getToday() {
  var date = new Date();
  var today = date.getFullYear() + "-" + (date.getMonth() + 1)  + "-" + date.getDate();
  return today;
}

function getNextDay(day) {
  var date = new Date(day);
  date.setDate(date.getDate() + 1);
  var nextday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return nextday;
}

module.exports = {
  getDates: getDates,
  getNextDay:getNextDay,
  getToday:getToday
}
