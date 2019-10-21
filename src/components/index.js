const path = require('path')
const files = require.context('@/components', false, /\.vue$/)
// require.context 创建自己的模块上下文。三个参数， 1、要搜索的目录 2、是否要搜索子目录 3、以什么文件结尾的文件

const modules = {} // 文件集合

files.keys().forEach(key => {
  // files.keys() ['./BubbleLoading.vue', './xxx.vue', ....]
  const name = path.basename(key, '.vue')
  // name = 'BubbleLoading' 'xxx' 'Bubble'
  // path.basename 返回path的最后一部分  两个参数  第一个 路径  第二个不跟则返回全名，比如 带 .vue 只返回 不带后缀名的字符串
  modules[name] = files(key).default || files(key)
})

export default modules
