const path = require('path')
const files = ['./BubbleLoading.vue', './xxx.vue', './Bubble.vue']

files.forEach(key => {
  const name = path.basename(key, '.vue')
  console.log(name)
})
