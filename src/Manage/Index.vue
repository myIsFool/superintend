<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#0a0a3c"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">一站式工作台 </el-menu-item>
    <el-menu-item index="3" disabled>问题工作台</el-menu-item>
    <el-menu-item index="4">布控订阅</el-menu-item>
    <el-menu-item index="6">系统管理</el-menu-item>
  </el-menu>
  <el-row style="margin-top: 10px">
    <el-col :span="22" :offset="1">
      <el-row>
        <el-col :span="5" class="bigDataDivTop" @click="ShowOrgNo">
          视频总概
        </el-col>
        <el-col :span="19">
          <el-col style="width: 650px; float: right">
            <el-col style="width: 300px; float: left">
              <select-org ref="ChildOrgSelect"> </select-org>
            </el-col>
            <el-col style="width: 350px; float: left">
              <select-date ref="ChildDate"></select-date>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import SelectOrg from "@/Assembly/SelectOrg.vue";
import SelectDate from "@/Assembly/SelectDate.vue";
export default {
  name: "default",
  components: {
    SelectOrg,
    SelectDate,
  },
  data() {
    return {
      message: "helloword",
      activeIndex2: "1",
      activeName: "first",
    };
  },
  methods: {
    defaultEvent() {
      this.message = "hello word";
    },
    ShowOrgNo() {
      var childOrg = this.$refs["ChildOrgSelect"].getCheckVal();
      console.log(childOrg);
    },
    handleSelect(key, keypath) {
      console.log(key);
      console.log(keypath);
    },
    handleClick() {
      console.log("ss");
    },
  },
  mounted: function () {
    this.defaultEvent();
  },
};
</script>

<style>
body {
  margin: 0px;
  background: #162755;
}
#app {
  margin: 0px;
}
.bigDataDivTop {
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(30, 71, 131, 1)
  );
  color: #fff;
  text-align: left;
  padding: 5px;
}
</style>