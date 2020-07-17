<template lang="html">
  <li class= "media list-group-item" @click="onVideoSelect">
      <img :src="thumbnailUrl" alt="" class="mr-3">
      <div class="media-body">
        <h5 class="mt-0 mb-1">{{video.snippet.title}}</h5>
        {{video.snippet.description}}
      </div>
  </li>
</template>

<script>
export default {
  name:'VideoListItem',
  props:['data'],
  data() {
    return{
      video: this.data,
      index:this.key,
    }
  },

  computed :{
    thumbnailUrl(){
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods:{
    onVideoSelect(){
      //console.log('inside onVideoSelect on videListItem');
      this.$emit('videoSelect',this.video);
    }
  }
}
</script>

<style lang="css" scoped>
  li{
    cursor:pointer;
  }
  li:hover {
    background-color: #eee;
  }

</style>
