<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link"></a>
        <img :src="item.image" alt @load="imageLoad"/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "",
  props: {
    banners: {
      type: Array,
      defualt: []
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad(){
      this.$emit('swiperImageLoad')  
    }
  },
};
</script>

<style scoped>
</style>