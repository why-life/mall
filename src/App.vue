<!--  -->
<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar'
export default {
  name: "App",
  props: [""],
  data() {
    return {};
  },
  components: {
    MainTabBar
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style scoped>
@import "assets/css/base.css";
#app {
    position: relative;
  }
</style>
