<template>
    <div>
        <SearchBar @termChanged="onTermChanged"></SearchBar>
        <VideoList :videos="videos"></VideoList>
        <h4>{{ videos.length }}</h4>
    </div>

</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    const API_KEY = 'AIzaSyD93QuI0CgYVvfgsEOd8Fw_w0SObvTHh0w'
    export default {
        name: 'App',
        components:{
            SearchBar,
            VideoList
        },
        data(){
          return{
            videos:[]
          }
        },
        methods:{
            onTermChanged(item){
                //console.log('working' +item);
                axios.get('https://www.googleapis.com/youtube/v3/search',{
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
            }
        }
    }

</script>