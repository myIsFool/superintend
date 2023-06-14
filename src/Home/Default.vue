<template>
  <el-button>我是ElButton</el-button>
</template>

<script>
import { ElButton, formatter } from "element-plus";
import axios from "@/request/index";
import { ElMessage, RepeatClick } from "element-plus";
export default {
  name: "default",
  data() {
    return {
      message: "helloword",
    };
  },
  methods: {
    defaultEvent() {
      this.message = "hello word";
    },
  },
  mounted: function () {
    this.defaultEvent();
  },
};
</script>

<style>
</style>