import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_id : "",
    user_idx : -1,

    students: [
      {
        s_name: "홍길동", user_id: "hong", user_pass: "hong", s_number: "20200001", s_department: "소프트웨어응용학부", s_sex: "1", s_phto: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F214DF23358E3BCBC32", courses: [
          {
            l_name: "데이터베이스", l_number: "VA20001", l_Professor: "홍길동", l_credit: "3", videos: [{

              v_name: "데이터베이스1", v_id: "1d38YZKCM88", v_time: "2:20",
            },
            {

              v_name: "데이터베이스2", v_id: "zZmRQHgLhMo", v_time: "3:44",
            },
            {

              v_name: "데이터베이스3", v_id: "EuJVVOXrOSI", v_time: "4:21",
            }]
          },

          {
            l_name: "네트워크", l_number: "VA20002", l_Professor: "이순신", l_credit: "3", videos: [{

              v_name: "네트워크1", v_id: "LJ_6HSctcpg", v_time: "18:59",
            },
            {

              v_name: "네트워크2", v_id: "WN_IGbVUCk4", v_time: "11:18",
            },
            {

              v_name: "네트워크3", v_id: "BBKOA9xod3E", v_time: "12:08",
            }]
          },




          {
            l_name: "웹프로그래밍", l_number: "VA20003", l_Professor: "이기자", l_credit: "3", videos: [{

              v_name: "웹프로그래밍1", v_id: "SzyAUszR9rE", v_time: "43:58",
            },
            {

              v_name: "웹프로그래밍2", v_id: "_3VUOUh2uQA", v_time: "3:44",
            },
            {

              v_name: "웹프로그래밍3", v_id: "w5tzYgBkXvw", v_time: "4:21",
            }]
          }],

      },


      {
        s_name: "하니", s_number: "20200002", user_id: "hani", user_pass: "hani", s_department: "소프트웨어응용학부", s_sex: "0", s_phto: "https://lh3.googleusercontent.com/proxy/9t3G_7UYDZdqKGarw5Gd8jLro6FqxYNeP6fD3ERTNbAMN7U7XzvAaQ0HOCuv4JPqQnxbolzOJxgebpehUBamMY0NpoIaZiag7aLL9AoKHlu2yBFVFwzmOke3i4xMfIlTPOH3v6ABTRDTYi7ssI5rQyvNMzBjtmnmyadM1i-r0Q5L5i4", courses: [
          {
            l_name: "데이터베이스", l_number: "VA20001", l_Professor: "홍길동", l_credit: "3", videos: [{

              v_name: "데이터베이스1", v_id: "1d38YZKCM88", v_time: "2:48",
            },
            {

              v_name: "데이터베이스2", v_id: "zZmRQHgLhMo", v_time: "3:44",
            },
            {

              v_name: "데이터베이스", v_id: "EuJVVOXrOSI", v_time: "4:21",
            }]
          },

          {
            l_name: "네트워크", l_number: "VA20002", l_Professor: "이순신", l_credit: "3", videos: [{

              v_name: "네트워크1", v_id: "LJ_6HSctcpg", v_time: "18:59",
            },
            {

              v_name: "네트워크2", v_id: "WN_IGbVUCk4", v_time: "11:18",
            },
            {

              v_name: "네트워크3", v_id: "BBKOA9xod3E", v_time: "12:08",
            }]
          },

          {
            l_name: "웹기획", l_number: "VA20004", l_Professor: "가나다", l_credit: "3", videos: [{

              v_name: "웹기획1", v_id: "oR9Zz6AZ3G8", v_time: "35:56",
            },
            {

              v_name: "웹기획2", v_id: "Vc_Kt4giXAU", v_time: "34:42",
            },
            {

              v_name: "웹기획3", v_id: "9NXUu3xexg4", v_time: "30:21",
            }]
          }


        ]
      }

      ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
