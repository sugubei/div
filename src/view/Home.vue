<template>
  <div class="home">
    <div>
      <CircleLoading />
    </div>
    <div>
      <BubbleLoading />
    </div>
    <div>
      <TeacupLoading />
    </div>
    <div>
      <Herat />
    </div>
    <div>
      <LandMark />
    </div>
    <div>
      <Badge />
    </div>
    <div>
      <Calendar />
    </div>
    <div>
      <Mail />
    </div>
    <div>
      <Vue />
    </div>
    <div>
      <PlayButton />
    </div>
    <div>
      <ProgressBar />
    </div>
    <div>
      <FloatingButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import CircleLoading from "../components/CircleLoading.vue";
import BubbleLoading from "../components/BubbleLoading.vue";
import TeacupLoading from "../components/TeacupLoading.vue";
import Herat from "../components/Herat.vue";
import LandMark from "../components/LandMark.vue";
import Badge from "../components/Badge.vue";
import Calendar from "../components/Calendar.vue";
import Mail from "../components/Mail.vue";
import Vue from "../components/Vue.vue";
import PlayButton from "../components/PlayButton.vue";
import ProgressBar from "../components/ProgressBar.vue";
import FloatingButton from "../components/FloatingButton.vue";
</script>

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
