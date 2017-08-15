  var deepCopy =  function (obj) {
    var buf
    if (obj instanceof Array) {
      buf = []
      var i = obj.length
      while (i--) {
        buf[i] = deepCopy(obj[i])
      }
      return buf
    } else if (obj instanceof Object) {
      buf = {}
      for (var k in obj) {
        buf[k] = deepCopy(obj[k])
      }
      return buf
    } else {
      return obj
    }
  }