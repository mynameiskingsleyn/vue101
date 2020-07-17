<template lang="html">
  <div v-if="info" class="col-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="details">
      <h4>{{videoTitle}} </h4>
      <p>{{ videoDesc }}</p>
    </div>
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
    },
    videoDesc(){
      return !this.isEmpty(this.video) ? this.video.snippet.description : '';
    },
    videoUrl(){
      const {videoId} = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    }
  },
  watch: {
    info:function(val){this.video = val;}
  }
}
</script>

<style lang="css" scoped>
  .details{
    margin-top:10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    overflow: scroll;
  }
</style>
