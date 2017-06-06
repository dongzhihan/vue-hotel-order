<template>
  <div style="">
    <x-header>这是{{$route.params.id}}小车</x-header>
    <group>
      <cell title="小车详细" :value="$route.params.id"></cell>
      <cell title="小车状态" :value="carState"></cell>
    </group>
    <div class="center" @click="carClick('forward')"><img class="btnColor" src="../../image/top.png"></img>
    </div>

    <div style="display: flex;justify-content: center">
      <div class="" @click="carClick('left')"><img class="btnColor" src="../../image/left.png"></div>
      <div style="width:1rem"></div>
      <div @click="carClick('right')"><img class="btnColor" src="../../image/right.png"></div>
    </div>
    <div class="center" @click="carClick('back')"><img class="btnColor" src="../../image/down.png"></img>
    </div>
  </div>
</template>
<style>
  .center {
    text-align: center;
  }

  .btnColor:active {
    background-color: greenyellow;
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
        carState: '故障'
      };
    },
    methods: {
      carClick(opt) {

      }
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
