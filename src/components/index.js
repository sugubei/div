const fs = require('fs')
const path = require('path')
// 解析需要遍历的文件夹
const filePath = path.resolve('../components')

// 调用文件遍历方法
fileDisplay(filePath)
let components = []
function fileDisplay (filePath) {
  // 根据文件路径读取文件，返回列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      // 遍历读取到的文件列表
      const re = /\.vue$/
      files.forEach(function (filename) {
        if (re.test(filename)) {
          console.log(filename)
          components.push(filename.split(','))
        }
      })
    }
  })
}

console.log(components)
