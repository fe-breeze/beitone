<style scoped>
section {
  background-color: #EDF1F5;
}

.login {
  width: 1200px;
  margin: 40px auto;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  background-image: url(../assets/login/zc-bj.jpg);
  background-repeat: no-repeat;
  background-position: 100% 80%;
}

h2 {
  background-color: #eee;
  color: #0a8fc1;
  width: 1148px;
  height: 60px;
  margin: 40px auto;
  line-height: 60px;
  text-indent: 1em;
}

.middle {
  width: 1148px;
  margin: 40px auto;
}

.in-list li {
  float: left;
  line-height: 50px;
}

.in-list li:first-child {
  width: 60px;
  margin-right: 20px;
  text-align: right;
}

.in-list li:nth-child(2) {
  width: 300px;
  margin-right: 20px;
}

input {
  height: 40px;
  width: 100%;
  line-height: 50px;
}

.login-list li:nth-child(3) input {
  width: 40%;
  margin-right: 20px;
}

.login-list>li {
  margin-top: 24px;
  margin-bottom: 24px;
}

.login-list {
  color: #999;
  font-size: 18px;
}

.in-list span {
  font-size: 16px;
  color: red;
}

p {
  font-size: 14px;
  color: #999;
  text-indent: 5.8em;
  margin-top: 40px;
  margin-bottom: 80px;
}

p a {
  color: #0a8fc1;
  padding-left: 10px;
}

.submit {
  display: block;
  width: 380px;
  height: 50px;
  background: #d99104;
  font-size: 24px;
  text-align: center;
  color: #fff;
  line-height: 48px;
  margin-bottom: 120px;
}

.submit:hover {
  background-color: #0a8fc1;
}

img {
  vertical-align: middle;
}
</style>
<template>
  <section>
    <div class="login">
      <h2>会员登录</h2>
      <div class="middle">
        <ul class="login-list">
          <li>
            <ul class="in-list clearfix">
              <li>
                <label>用户名</label>
              </li>
              <li>
                <input type="text" v-on:blur="userWarn" v-model="userInput">
              </li>
              <li><span v-show="user">用户名不能为空</span></li>
            </ul>
          </li>
          <li>
            <ul class="in-list clearfix">
              <li>
                <label>密码</label>
              </li>
              <li>
                <input type="password" v-on:blur="passWarn" v-model="passInput">
              </li>
              <li><span v-show="password">密码不能为空</span></li>
            </ul>
          </li>
          <li>
            <ul class="in-list clearfix">
              <li>
                <label>验证码</label>
              </li>
              <li>
                <input type="text">
                <img src="../assets/login/verify.jpeg" alt="">
              </li>
            </ul>
          </li>
        </ul>
        <p>还不是会员？<a href="#">立即注册</a><a href="#">忘记密码？</a></p>
        <a class="submit" href="#">登录</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userInput: '',
      passInput: '',
      user: false,
      password: false
    }
  }, //data:function(){return {user:false,password:false}}
  methods: {
    userWarn() {
      if (!this.userInput.trim()) {
        this.user = true
      } else {
        this.user = false
      }
    },
    passWarn() {
      if (!this.passInput.trim()) {
        this.password = true
      } else {
        this.password = false
      }
    }
  }
}
</script>
