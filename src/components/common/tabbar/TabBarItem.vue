<!--  -->
<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deeppink'
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
    return this.isActive ? {color: this.activeColor} : {}
    }
  },
  beforeMount() {},
  mounted() {},
  methods: {
    clickItem(){
      if(this.path !== this.$route.path){
        return this.$router.replace(this.path);
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  flex: 1;
  text-align: center;
}

.tab-bar-item img{
  height: 25px;
  margin-top: 5px;
}

</style>