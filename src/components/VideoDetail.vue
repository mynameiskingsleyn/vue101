<template lang="html">
  <div class="">
    {{videoTitle}}
  </div>
</template>

<script>
import collection from '../mixins/collection';
export default {
  name:'VideoDetail',
  props:['info'],
  mixins:[collection],
  data(){
    return{
      video:this.info ? this.info : {},
    }
  },
  computed:{
    videoTitle(){
      return !this.isEmpty(this.video) ? this.video.snippet.title : '';
    }
  },
  watch: {
    info:function(val){this.video = val;}
  }
}
</script>

<style lang="css">
</style>
