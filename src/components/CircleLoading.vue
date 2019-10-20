<template>
  <div class="circle-loading">20%</div>
</template>

<style scoped>
@keyframes rorate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.circle-loading {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgb(184, 187, 191);
  border-radius: 100%;
  width: 40px;
  height: 40px;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  color: rgb(172, 28, 177);
}
</style>
