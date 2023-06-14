<template>
  111
  <el-button>我是ElButton</el-button>
</template>

<script>
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