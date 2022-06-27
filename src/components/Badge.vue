<template>
    <div class="badge">Hi</div>
</template>

<style lang="less" scoped>
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  4% {
    transform: rotate(-5deg);
  }
  8% {
    transform: rotate(5deg);
  }
  12% {
    transform: rotate(-5deg);
  }
  16% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  24% {
    transform: rotate(5deg);
  }
  28% {
    transform: rotate(0deg);
  }
}
.badge {
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 4px 4px 0 0;
    margin: 2px;
    width: 36px;
    height: 36px;
    overflow: hidden;
    filter: drop-shadow(0 1px 1px #973340a3);// filter 滤镜  drop-shadow 给图像设置一个阴影效果
    // filter: grayscale(100%); //灰色
    color: white;
    font-weight: bold;
    line-height: 32px;
    text-shadow: 0 1px rgba(0, 0, 0, .4);
    animation:  shake infinite 2s ease;
}
// .badge:hover {
//    filter: grayscale(0); //鼠标放上彩色
// }
.badge::before,
.badge::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, red, #ff8484);
}
.badge::after {
    transform-origin: right top;
    transform: skewY(20deg);
}
.badge::before {
    transform-origin: left top; //设置元素旋转的原点位置
    transform: skewY(-20deg); //沿着X轴进行2D旋转
}
</style>
