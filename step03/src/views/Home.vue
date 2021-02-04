<template>
  <div>


      ID <input type="text" v-model="userId"><br>
      PASSWORD <input type="text" v-model="userPass"><br>

    <button @click=loginClick>LOGIN</button>

  </div>
</template>

<script>

export default {

  data(){

    return{
      userId : "lee",
      userPass : "123"
    }

  },
  methods:{
    loginClick: function(){

      this.$router.push({name:'Course'}) //Course로 값과 페이지가 넘어간다.

    }


  }

}


</script>
