<template>
    <div class="container">
      <div class="row">
          <div class="col-12">
            <SearchBar @termChanged="onTermChanged"></SearchBar>
          </div>
      </div>
      <div class="row">
        <video-detail :info="currentVideo"></video-detail>
        <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
      </div>


    </div>

</template>

<script>
    //import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';
    import collection from './mixins/collection.js';
    const API_KEY = 'AIzaSyD93QuI0CgYVvfgsEOd8Fw_w0SObvTHh0w'
    export default {
        name: 'App',
        components:{
            SearchBar,
            VideoList,
            VideoDetail
        },
        mixins:[collection],
        data(){
          return{
            videos:[],
            selectedVideo: {}
          }
        },
        methods:{
            onTermChanged(item){
                //console.log('working' +item);
                if(item.length < 3){
                  return;
                }
                this.get('https://www.googleapis.com/youtube/v3/search',{
                    params:{
                        key:API_KEY,
                        type:'video',
                        part:'snippet',
                        q:item
                    }
                }).then(response=>{
                    console.log(response.data.items);
                    this.videos = response.data.items;
                }).catch(err=>console.log(err));
            },
            onVideoSelect(video){
              this.selectedVideo = video;
            }
        },
        computed :{
          currentVideo(){
            return !this.isEmpty(this.selectedVideo) ? this.selectedVideo : this.videos[0];
          }
        }
    }

</script>
