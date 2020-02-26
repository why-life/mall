<!--  -->
<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import { getDetail } from "network/detail";
export default {
  name: "Detail",
  props: {},
  data() {
    return {};
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    this.getDetailDate()
  },
  methods: {
    getDetailDate() {
      const iid = this.$route.query.iid;
      getDetail(iid).then(res => {
        const data = res.result;
        this.image
      });
    }
  }
};
</script>

<style scoped>
</style>