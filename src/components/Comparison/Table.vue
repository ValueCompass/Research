<template>
  <div>
    <div class="">
      <h4>Schwartz Theory of Basic Values</h4>
          <el-table :data="Schwartz_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template
              v-for="(item, index) in Schwartz_table_columns"
              :key="index"
            >
              <el-table-column
                v-if="item != 'model_name'"
                :prop="item"
                :label="item.substring(0, 3)"
              />
            </template>
          </el-table>
          <h4>Moral Foundations Theory</h4>
          <el-table :data="MFT_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template v-for="(item, index) in MFT_table_columns" :key="index">
              <el-table-column :prop="item" :label="item" :formatter="formatter"  />
            </template>
          </el-table>
          <h4>Diverse Safety Risks</h4>
          <el-table :data="Risk_table_data" border style="width: 100%">
            <el-table-column prop="model_name" label="Model" />
            <template v-for="(item, index) in Risk_table_columns" :key="index">
              <el-table-column :prop="item" :label="item" />
            </template>
          </el-table>
          <h4>LLM Value System</h4>
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
  defineProps
} from "vue";

const props = defineProps({
  Schwartz_table_data: {
    type: Array,
    required: true,
  },
  Schwartz_table_columns: {
    type: Array,
    required: true,
  },
  MFT_table_data: {
    type: Array,
    required: true,
  },
  MFT_table_columns: {
    type: Array,
    required: true,
  },
  Risk_table_data: {
    type: Array,
    required: true,
  },
  Risk_table_columns: {
    type: Array,
    required: true,
  },
});

defineExpose({
  setRadarChart,
});
const formatter = (row, column) => {
  console.log(row,column)
  console.log(row[column.label])
  if(column.label == 'model_name'){
    return row[column.label]
  }else{
    console.log(row[column.label])
    return row[column.label].toFixed(5)
  }
  
}
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）

</script>
<style>
</style>
