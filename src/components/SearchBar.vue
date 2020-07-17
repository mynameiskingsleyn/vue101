<template>
    <div>
        <input type="text" @input="onInput"/>
    </div>
</template>

<script>
    export default{
      name:'SearchBar',
      data(){
          return{

          }
      },
      methods:{
          onInput(event){
             this.$emit('termChanged',event.target.value)
          }
      }
    };
</script>

<style scoped>
  input{
    width:75%;
  }
  div{
    text-align:center;
    margin:20px;
  }
</style>
