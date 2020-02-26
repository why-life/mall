<!--  -->
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: [""],
  data() {
    return {};
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  background-color: #f6f6f6;
  z-index: 999;
}


</style>