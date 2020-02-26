<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:currentIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      defualt: []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  background-color: #fff;
  z-index: 3;
}


.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active span{
  border-bottom: 2px solid var(--color-tint);
  padding-bottom: 3px
}
</style>