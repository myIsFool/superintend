<template>
  <el-col :span="24">
    <el-form-item label="时间">
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      />
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: "SelectDate",
  data() {
    return {
      value1: "",
      ticket:
        "-BX1LOvF_AZM8mesVzDyAKyco5UoHSkO14hhmHJm4upK-jachO3nh_QZRR8XJBv7mY_zPE4mx07z0tN3e37ie-oXQR2WAzuJeWCW2HXV34010PGsxrzruUx13urZFIhCiTJWXhPd_eoFQlJmjrLSnw==",
    };
  },
  methods: {
    getCheckVal() {
      return this.value1;
    },
  },
  mounted: function () {},
};
</script>