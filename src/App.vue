<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view/>

      <div class="footer">
        <cube-tab-bar
          v-model="selectedLabelDefault"
          :data="tabs"
          @click="clickHandler"
          @change="changeHandler">
        </cube-tab-bar>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '礼品屋',
        icon: 'cubeic-vip'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler () {
      // if you clicked home tab, then print 'Home'
      // console.log(label)
    },
    changeHandler () {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style>
 .footer{
   position:fixed;
   bottom:0;
   width: 100%;
   background-color: #f7f7fa;
   z-index: 20;
   font-size: 0.6rem;
 }
</style>
