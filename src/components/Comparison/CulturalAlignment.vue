<template>
  <div>
    <div class="">
      <div>
        <div>
          <div
            class="chart"
            ref="chartDom"
            style="width: 1200px; height: 600px;margin:0 auto"
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
const allHeatMapDataObject = ref();
let countries = [];

function getKeyValue(array) {
  const result = array.reduce((acc, item) => {
    const { model, ...rest } = item; // 提取name字段，其他字段放入rest
    acc[model] = rest; // 将剩余字段放入对象
    return acc;
  }, {});
  return result;
}

const getAllHeatMapData = async () => {
  return axios.get("./data/value_sim_heatmap.json").then((value_space_data) => {
    console.log(value_space_data.data);
    allHeatMapData.value = value_space_data.data;
    const obj = {};
    for (let i = 0; i < value_space_data.data.models.length; i++) {
      obj[value_space_data.data.models[i]] =
        value_space_data.data.cosine_sim_matrix[i];
    }
    console.log(obj);
    allHeatMapDataObject.value = obj;
  });
};
const setHotChart = (modelNameList) => {
  let allHeatMapDataFilter = [];
  if (modelNameList) {
    let cosine_sim_matrixArr = [];
    for (var i = 0; i < modelNameList.length; i++) {
      cosine_sim_matrixArr.push(allHeatMapDataObject.value[modelNameList[i]]);
    }
    allHeatMapDataFilter = {
      cosine_sim_matrix: cosine_sim_matrixArr,
      models: modelNameList,
      countries: countries,
    };
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
  const modelNames = allHeatMapDataFilter.models;
  const data = hotData.map(function (item) {
    return [item[1], item[0], item[2].toFixed(5) || "-"];
  });
  console.log(hotData, "hotData", data);

  chartInstance.setOption({
    yAxis: {
      type: "category",

      data: modelNames,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#000",

        fontSize: 16,
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

  // const modelNames = ['GPT-4-Turbo', 'GPT-3.5-Turbo', 'Claude 2','Mistral-7B-Instruct', 'Llama-2-7b-chat',];
  const modelNames = allHeatMapData.value.models

  // prettier-ignore

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
        color: "#000",

        fontSize: 16,
      },
    },

    yAxis: {
      type: "category",

      data: modelNames,

      splitArea: {
        show: true,
      },

      axisLabel: {
        color: "#000",
        fontSize: 16,
      },
    },

    visualMap: {
      min: 0,

      max: 1,

      calculable: true,

      orient: "horizontal",

      left: "center",

      bottom: "15%",
      // color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      color: ["#083669", "#4795C3", "#eeeeee", "#E0785F", "#690320"],
      textStyle: { color: "#000" },
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
