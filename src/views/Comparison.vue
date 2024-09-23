<template>
  <div>
    <div class="container">Value Comparison Page</div>

    <div class="chart" style="width: 100%; height: 600px" ref="chartDom"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import * as echarts from "echarts";
import "echarts-gl";

const chartDom = ref(null);
let chartInstance = null;

onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value);

  var data = generateData();
  const option = {
    tooltip: {},
    xAxis3D: {
      type: "value",
    },
    yAxis3D: {
      type: "value",
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      axisLine: {
        lineStyle: { color: "#fff" },
      },
      axisPointer: {
        lineStyle: { color: "#fff" },
      },
      viewControl: {
        autoRotate: true,
      },
    },
    series: [
      {
        type: "scatter3D",
        data: data,
        symbolSize: 16,
      },
    ],
  };
  chartInstance.setOption(option);
});

function generateData() {
  var data = [];
  for (var i = 0; i <= 20; i++) {
    var d1 = [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ];
    var color = "#5470C6";
    if (d1[3] < 50) {
      color = "#91CC75";
    }
    data.push({
      // 数据项名称
      name: i,
      value: d1,
      //自定义特殊itemStyle，仅对该item有效
      itemStyle: {
        color: color,
      },
    });
  }
  console.log(data);
  return data;
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  color: #fff;
}
</style>
