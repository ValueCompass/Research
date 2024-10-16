<template>
  <div class="bg">
    <div class="main-container">
      <div class="title-content">
        <h2>Compare Pool</h2>
        <div class="compare-model-list">
          <ul>
            <li>
              <p class="name">GPT-4-Turbo</p>
              <p class="point-num">64.4<span class="point">points</span></p>
              <div class="top-item-content">
                <el-tooltip
                  effect="customized"
                  content="Proprietary"
                  placement="top"
                >
                  <span class="type-icon top-type-icon"></span>
                  <!-- <span
                  class="type-close-icon top-type-icon"
                ></span> -->
                </el-tooltip>
                <span class="dev">OpenAl</span>
                <span class="date">2023.06</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <div class="chart-tab">
        <div class="chart-tab-title">Evaluation Results</div>
        <ul>
          <li
            :class="{ active: currentTab == tab.index }"
            @click="tabSwitch(tab.index)"
            v-for="tab in tabList"
            :key="tab.index"
          >
            <span class="lead"></span>{{ tab.name }}
          </li>
        </ul>
      </div>
      <div class="chart-main">
        <div class="chart-main-chart"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import * as echarts from "echarts";

const tabList = [
  {
    name: "Schwartz Value Theory",
    index: 0,
    children: [
      {
        name: "Evaluation Results and cases",
        index: 0,
      },
      {
        name: "Distance between national values",
        index: 1,
      },
    ],
  },
  {
    name: "Moral Foundation Theory",
    index: 1,
    children: [
      {
        name: "Evaluation Results and cases",
        index: 0,
      },
      {
        name: "Distance between national values",
        index: 1,
      },
    ],
  },
  {
    name: "Diverse Safety Risks",
    index: 2,
  },
  {
    name: "LLMs’ Unique Values",
    index: 3,
  },
];
const chartTabMenu = [
  "Benevolence",
  "Achievement",
  "Universalism",
  "Tradition",
  "Stimulation",
  "Self-direction",
  "Security",
  "Power",
  "Hedonism",
  "Conformity",
];

onMounted(async () => {});

const currentTab = ref(0);
const tabSwitch = (index) => {
  currentTab.value = index;
};

// 销毁ECharts实例
onUnmounted(() => {});
</script>

<style scoped lang="scss">
.title-content {
  margin-top: 3.56em;
  background: rgba(18, 31, 55, 1);
  padding: 2.25em 3em;
  border-radius: 0.375em;
  color: #fff;
  h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.3125em;
  }
  .compare-model-list {
    ul {
      display: flex;
      li {
        color: #fff;
        padding: 1.125em 1.5em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.75em;
        text-align: center;
        width: 31%;
        border: 1px solid #4992ff;
        .name {
          margin-right: 0.5em;
        }
        .point-num {
          font-size: 1.25em;
          font-weight: 600;
          line-height: 1.625em;
        }
        .point {
          font-size: 0.6em;
          font-weight: 400;
          line-height: 1.3em;
          margin-left: 0.4em;
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
}
.chart-box {
  margin-top: 4.5em;
  padding: 0 4em 4.5em;
  display: flex;
  .chart-tab {
    width: calc(calc(100% - 1200px) / 2);
    min-width: 13.125em;
    .chart-tab-title {
      font-size: 1em;
      font-weight: 700;
      color: #fff;
    }
    ul {
      li {
        font-size: 1em;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 1.5em;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          width: 0.6875em;
          height: 1.125em;
          display: inline-block;
          margin-right: 1em;
        }
        &.active {
          font-weight: 700;
          color: rgba(16, 147, 255, 1);
          span {
            background: url(@/assets/images/right-arrow.svg) no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
  .chart-main {
    .chart-main-chart {
      display: flex;
      align-items: center;
    }
  }
}
</style>
