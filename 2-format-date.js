var formatDate = function (d) {
    // 时间戳格式
    if (!(d instanceof Date)) { 
      d = new Date(d)
    }
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    month = month <= 9 ? '0' + month : month
    var date = d.getDate()
    date = date <= 9 ? '0' + date : date
    var hour = d.getHours()
    hour = hour <= 9 ? '0' + hour : hour
    var minute = d.getMinutes()
    minute = minute <= 9 ? '0' + minute : minute
    var second = d.getSeconds()
    second = second <= 9 ? '0' + second : second
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  }