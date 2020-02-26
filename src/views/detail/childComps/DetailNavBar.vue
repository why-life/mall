<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <span
          v-for="(item, index) in title"
          :key="index"
          class="title-item"
          :class="{active: curruntIndex === index}"
          @click="clickDetailItem(index)"
        >{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  props: {},
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      curruntIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    clickDetailItem(index){
      this.curruntIndex = index;
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  background-color: #fff;
  color: var(--color-text);
  font-size: 13px;
  padding-right: 44px;
}
.title-item {
  flex: 1;
}

.back img {
  vertical-align: middle;
}

.active {
  color: var(--color-tint);
}
</style>