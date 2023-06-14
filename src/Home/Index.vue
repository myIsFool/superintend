<template>
  {{ message }}
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      message: "index",
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