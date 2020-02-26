<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      defualt: []
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
}

.recommend-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>