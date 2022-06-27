<template>
  <div class="home">
    <div>
      <circle-loading />
    </div>
    <div>
      <bubble-loading />
    </div>
    <div>
      <teacup-loading />
    </div>
    <div>
      <hert />
    </div>
    <div>
      <land-mark />
    </div>
    <div>
      <badge />
    </div>
    <div>
      <calendar />
    </div>
    <div>
      <mail />
    </div>
    <div>
      <vue />
    </div>
    <div>
      <play-button />
    </div>
    <div>
      <progress-bar />
    </div>
    <div>
      <floating-button />
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  display: grid;
  grid-template-columns: repeat(
    6,
    1fr
  ); /*//网格列数 重复创建3个 1rf 的列 1rf是总空间减去固定空间和百分比大小，然后再分配
*/
  grid-template-rows: repeat(3, 1fr); /*// 网格行数 重复创建 2个 1rf的行
*/
  height: 100vh;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.home > div {
  transform: scale(1.5);
}
</style>
