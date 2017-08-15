var setTag = function () { 
    let now = new Date()
    let filepath = path.join(__dirname,'../dist/index.html')
    let data = fs.readFileSync(filepath).toString()
    let index = data.indexOf('</body>')
    let temp1 = data.slice(0, index)
    let temp2 = data.slice(index, data.length)
    data = temp1 + '<script>console.log("Build Time: ' + now + '");</script>' + temp2
    fs.writeFileSync(filepath, data)
    console.log("  Build Time: " + now)
}