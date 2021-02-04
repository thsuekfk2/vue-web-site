<template>
  <div class="course">

         <table class="box1" border="1">
                               
            <tr><td>수강과목</td><td>동영상 목록</td></tr>
            
            <tr v-for="(x,idx) in student.courses" v-bind:key="x.user_id">
             
            
              <td>
               {{idx+1}}. {{x.l_name}}
            </td>
            
                  <td>
                   <div v-for="x in student.courses[idx].videos" v-bind:key="x.l_number">
                   <a @click=coursesClick(x.v_id)>{{x.v_name}}- {{x.v_id}}</a></div>
                    
                </td>
            

        </tr>
    </table>


    <table border="1" class="box2" >
        <tr>
            <td colspan="2">
                내 정보
            </td>
         
        </tr>
        <tr>
            <td colspan="2">
               <img v-bind:src="student.s_phto" width="300" height="300">
            </td>
          
        </tr>
        <tr>
            <td>
              학번 
            </td>
            <td>
                {{student.s_number}} 
              </td>
        </tr>
        <tr>
            <td>
               이름
            </td>
            <td>
        {{student.s_name}}
             </td> 
        </tr>
        <tr>
            <td>
               성별
            </td>
            <td>
                    <div v-if="student.s_sex==='1'">
                        <i class="fas fa-mars"></i></div>
                        <div v-if="student.s_sex==='0'">
                         <i class="fas fa-venus"></i></div>
                   
             </td> 
        </tr>
        
       
      </table>


  </div>
</template>

<script>

export default {
    data(){
        return{
        student : this.$store.state.students[0]
        }
    },
    methods:{
    coursesClick:function(v_id){

            
          this.$router.push({name: 'Play' ,query : { v_id : v_id } }  );
       
       }

    }
}


</script>
