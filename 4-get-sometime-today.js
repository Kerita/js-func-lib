var getSometimeToday = function (time) {
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var date = d.getDate()
    return new Date(year + '-' + month + '-' + date + ' ' + time)
  }