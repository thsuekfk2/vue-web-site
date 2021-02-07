<template>
  <div>
    <div v-if="this.$store.state.user_id">
      로그인 되었습니다.<br>
      로그인 ID : {{this.$store.state.user_id}}
      
      <br>

      <button @click=logOutClick>LOGOUT</button>
    </div>

    <div v-else>
      ID <input type="text" v-model="user_id"><br>
      PASSWORD <input type="password" v-model="user_pass"><br>

    <button @click=loginClick>LOGIN</button>
    </div> 
  </div>
</template>

<script>

export default {

  data(){

    return{
      user_id : "lee",
      user_pass : "123"
    }

  },
  methods:{
    loginClick: function(){

      let find = -1;

      for(let i = 0 ; i < this.$store.state.students.length ; i++ ){
        if((this.$store.state.students[i].user_id == this.user_id)&&(this.$store.state.students[i].user_pass == this.user_pass))
            find = i;
      }

      if(find != -1 ){
        console.log(this.$store.state.students[find].s_name);
        this.$store.state.user_id = this.user_id;
        this.$store.state.user_idx = find;
        this.$router.push({name:'Course'}); //Course로 값과 페이지가 넘어간다.

      }else{
        console.log("찾을 수 없습니다.");
      }


      
    },
    logOutClick: function(){
      this.$store.state.user_id ="";
      

    }
 

      
    }


  }




</script>
