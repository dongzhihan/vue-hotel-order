<template>
  <div>
    <swiper>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index"><img style="height:100%;width:100%" :src="item"></swiper-item>
    </swiper>
    <!--    <div class="flexCenter" style="display:flex; flex-wrap: wrap">
      <div @click="goTo(item.id)" style="margin-top:0.3rem;width:50%" v-for="(item,index) in bedTypes">
        <div class="center"><img style="width:80%;height:80%" :src="item.src" alt="">
        </div>
        <div class="center fontName"><span>{{item.title}}</span></div>
      </div>
    </div>-->
    <panel header="列表" @on-click-item="goTo" :list="bedTypes" type="1"></panel>
  </div>
</template>
<style scoped>
  .carGroup {
    display: flex;
    flex-wrap: wrap;
  }

  .car {
    width: 100px;
    margin-top: 15px;
  }

</style>
<script>
  import {
    Swiper,
    SwiperItem,
    Selector,
    Group,
    Panel,
    XButton
  } from 'vux';
  // import api from '../js/api';

  export default {
    data() {
      return {
        defaultValue: '',
        imgList: [
          'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
          'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
          'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
        ],
        bedTypes: [

          {
            src: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
            id: 5,
            title: '大床房',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          },
          {
            src: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
            id: 6,
            title: 'no2'
          },
          {
            src: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
            id: 7,
            title: 'no3'
          },
          {
            src: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
            id: 8,
            title: 'no4'
          },
          {
            src: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
            id: 9,
            title: 'no5'
          }
        ]
      };
    },
    components: {
      Selector,
      Group,
      XButton,
      Swiper,
      SwiperItem,
      Panel
    },
    methods: {
      goTo(item) {
        console.log(item);
        //  this.$http.post(api.xxx, data, api.config).then((data) => {
        // if (data.data.Errcode === 0) {
        this.$router.push({
          name: 'bedDetail',
          params: {
            id: item.id
          }
        });
        // }
        // });
      }
    }
  };

</script>
<style scoped>
  .fontName {
    font-size: 0.5rem;
    font-weight: bold;
    font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
  }

</style>
