import axios from 'axios'
export default{
    methods:{
        get(url,data){
          let param = !this.isEmpty(data) ? data.params : {};
          return axios.get(url,{params:param});
        },
        // post(url,data,successMessage='success',action=''){
        //
        // },
        isEmpty(obj){
          return Object.keys(obj).length===0;
        }
    }
}
