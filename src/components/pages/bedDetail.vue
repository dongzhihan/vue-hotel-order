<template>
  <div style="">
    <x-header>{{$route.name}}</x-header>
    <!--首图-->

    <div class="center"><img :src="hotel.img" alt=""></div>
  </div>
</template>
<style>
  .center {
    text-align: center;
  }

</style>
<script>
  import {
    XHeader,
    Cell,
    Group
  } from 'vux';

  export default {
    data() {
      return {
        hotel: ''
      };
    },
    methods: {
      carClick(opt) {

      }
    },
    created() {
      this.hotel = {
        img: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png',
        id: 9,
        name: 'no5'
      };
    },
    components: {
      XHeader,
      Cell,
      Group
    }

  };

</script>

<style scoped>


</style>
