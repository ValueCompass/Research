<template>
  <div>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
            style="width: 1200px; height: 600px"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
} from "vue";
import axios from "axios";
import * as echarts from "echarts";

const chartDom = ref(null);
let chartInstance = null;
const allHeatMapData = ref();
let countries = [];

const getAllHeatMapData = async () => {
  return axios.get("./data/value_sim_heatmap.json").then((value_space_data) => {
    console.log(value_space_data.data);
    allHeatMapData.value = value_space_data.data;
  });
};
const setHotChart = (modelNameList) => {
  let allHeatMapDataFilter = [];
  if (modelNameList) {
    let cosine_sim_matrixArr = [];
    let modelsArr = [];
    for (var i = 0; i < allHeatMapData.value.models.length; i++) {
      if (modelNameList.indexOf(allHeatMapData.value.models[i]) != -1) {
        cosine_sim_matrixArr.push(allHeatMapData.value.cosine_sim_matrix[i]);
        modelsArr.push(allHeatMapData.value.models[i]);
      }
      allHeatMapDataFilter = {
        cosine_sim_matrix: cosine_sim_matrixArr,
        models: modelsArr,
        countries: countries,
      };
    }
  } else {
    allHeatMapDataFilter = allHeatMapData.value;
  }

  console.log("modelNameList", modelNameList, allHeatMapDataFilter);

  var hotData = [];
  for (let i = 0; i < allHeatMapDataFilter.cosine_sim_matrix.length; i++) {
    for (let j = 0; j < allHeatMapDataFilter.countries.length; j++) {
      hotData.push([i, j, allHeatMapDataFilter.cosine_sim_matrix[i][j]]);
    }
  }
  const days = allHeatMapDataFilter.models;
  const data = hotData.map(function (item) {
    return [item[1], item[0], item[2].toFixed(5) || "-"];
  });
  console.log(hotData, "hotData", data);

  chartInstance.setOption({
    yAxis: {
      type: "category",

      data: days,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#fff",

        fontSize: 12,
      },
    },
    series: [
      {
        name: "Punch Card",

        type: "heatmap",

        data: data,

        label: {
          show: true,
        },
      },
    ],
  });
};

defineExpose({
  setHotChart,
});

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  await getAllHeatMapData();

  // const hours = ["Germany", "France", "USA", "Britain", "Russia", "China"];
  console.log("allHeatMapData.value.countries", allHeatMapData.value);
  countries = allHeatMapData.value.countries;

  // prettier-ignore

  // const days = ['GPT-4-Turbo', 'GPT-3.5-Turbo', 'Claude 2','Mistral-7B-Instruct', 'Llama-2-7b-chat',];
  const days = allHeatMapData.value.models

  // prettier-ignore
  var hotData = []
  for (let i = 0; i < allHeatMapData.value.cosine_sim_matrix.length; i++) {
    for (let j = 0; j < allHeatMapData.value.countries.length; j++) {
      hotData.push([i, j, allHeatMapData.value.cosine_sim_matrix[i][j]]);
    }
  }

  const data = hotData.map(function (item) {
    return [item[1], item[0], item[2].toFixed(5) || "-"];
  });
  console.log(hotData, "hotData", data);

  console.log(data);
  chartInstance = echarts.init(chartDom.value);
  const option = {
    tooltip: {
      position: "top",
    },

    grid: {
      height: "50%",

      top: "10%",
      left: "2%",
      containLabel: true,
    },

    xAxis: {
      type: "category",

      data: countries,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#fff",

        fontSize: 14,
      },
    },

    yAxis: {
      type: "category",

      data: days,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#fff",
        fontSize: 14,
      },
    },

    visualMap: {
      min: 0,

      max: 1,

      calculable: true,

      orient: "horizontal",

      left: "center",

      bottom: "15%",
      color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      textStyle: { color: "#fff" },
    },

    // series: [
    //   {
    //     name: "Punch Card",

    //     type: "heatmap",

    //     data: data,

    //     label: {
    //       show: true,
    //     },

    //     emphasis: {
    //       itemStyle: {
    //         shadowBlur: 10,

    //         shadowColor: "rgba(0, 0, 0, 0.5)",
    //       },
    //     },
    //   },
    // ],
  };
  chartInstance.setOption(option);

  setHotChart();
});
</script>
<style>
</style>
