<template>
  <el-col :span="24">
    <el-form-item label="公安机构">
      <el-tree-select
        v-model="OrgNo"
        check-strictly
        lazy
        :load="loadOrg"
        :props="props"
        :render-after-expand="false"
      ></el-tree-select>
    </el-form-item>
  </el-col>
</template>
<script>
import axios from "@/request/index";
export default {
  name: "SelectOrg",
  data() {
    return {
      OrgNo: "",
      ticket:
        "-BX1LOvF_AZM8mesVzDyAKyco5UoHSkO14hhmHJm4upK-jachO3nh_QZRR8XJBv7mY_zPE4mx07z0tN3e37ie-oXQR2WAzuJeWCW2HXV34010PGsxrzruUx13urZFIhCiTJWXhPd_eoFQlJmjrLSnw==",
      props: {
        label: "label",
        children: "children",
        isLeaf: "isLeaf",
      },
    };
  },
  methods: {
    defaultEvent() {
      this.message = "hello word";
    },
    getCheckVal() {
      return this.OrgNo;
    },
    loadOrg: function (node, resolve) {
      if (node.isLeaf) return resolve([]);
      var url = `/api/Org/GET?spno=001-001&ticket=${this.ticket}`;
      if (node.data.value != undefined) {
        url = `/api/Org/GET?spno=001-001&id=${node.data.value}&ticket=${this.ticket}`;
        //   url = `/api/Org/GET?spno=001-001&ticket=${this.ticket}`;
      }
      axios.get(url, {}).then(function (res) {
        if (res.data.ok == true && res.data.data.length > 0) {
          var Orgs = [];
          for (var i = 0; i < res.data.data.length; i++) {
            var resdata = res.data.data[i];
            var thisOrgs = {
              label: resdata.name,
              value: resdata.id,
              isLeaf: true,
            };
            if (res.data.data[i].entity.UserCount > 0) {
              thisOrgs = { label: resdata.name, value: resdata.id };
            }
            Orgs.push(thisOrgs);
          }
          resolve(Orgs);
        }
      });
    },
  },
  mounted: function () {
    this.defaultEvent();
  },
};
</script>