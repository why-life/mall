<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物城</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl"
      v-show="toFixed"
      class="tab-control"
    />
    <scroll
      class="content"
      :probeType="3"
      ref="scroll"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="pullingUp"
    >
      <div>
        <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
        <goods-list :goods="showGoodsList"></goods-list>
      </div>
    </scroll>
    <back-top class="back-top" @click.native="backTab" v-show="showBackTop">
      <img src="~assets/img/common/top.png" />
    </back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { debounce } from "../../common/utils";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  props: [""],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      showBackTop: false,
      toFixed: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },

  created() {
    this.getMultiDate();
    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  methods: {
    /**
     * 事件监听
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    contentScroll(pos) {
      this.showBackTop = pos.y < -1500;

      this.toFixed = -pos.y > this.tabOffsetTop;
    },
    backTab() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    pullingUp() {
      this.getHomeProducts(this.currentType);

      this.$refs.scroll.finishPullUp();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    /**
     * 网络请求
     */
    getMultiDate() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeProducts(type) {
      getHomeGoods(type, this.goodsList[type].page + 1).then(res => {
        const goodsList = res.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.tab-control {
  position: relative;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>