<template>

    <div class="col-md-4">
        <ul class="list-group">
            <video-list-item v-for="(video) in videoList" :data="video" :key="video.etag"
            @videoSelect="onVideoSelect"> </video-list-item>
        </ul>

    </div>
</template>

<script>
    import VideoListItem from './VideoListItem';
    export default {
        name: 'VideoList',
        components:{
          VideoListItem
        },
        props:{
          videos:Array
        },
        data(){
          return{
            videoList:this.videos
          }
        },
        watch :{
          videos:function(val)  { this.videoList = val;}
        },
        methods:{
          onVideoSelect(video){
            //console.log('inside onVideoSelect on videList');
            this.$emit('videoSelect',video);
          }
        }
    }

</script>

<style >

</style>
