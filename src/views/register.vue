<style scoped>
section {
  background-color: #EDF1F5;
}

.register {
  width: 1200px;
  margin: 40px auto;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  background-image: url(../assets/login/zc-bj.jpg);
  background-repeat: no-repeat;
  background-position: 100% 80%;
  color: #999;
  font-size: 18px;
}

.reg-list {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
}

.reg-list:first-child {
  margin-top: 50px;
}

.reg-list li {
  float: left;
  margin-right: 20px;
  line-height: 40px;
}

.reg-list li:first-child {
  width: 80px;
  text-align: right;
  line-height: 40px;
}

.reg-list li:nth-child(2) {
  width: 300px;
  margin-right: 20px;
}

.reg-list input {
  width: 100%;
  line-height: 40px;
}

.reg-list span {
  font-size: 16px;
  color: red;
  line-height: 40px;
}

.reg-list .yzm {
  width: 150px;
}

.reg-list img {
  vertical-align: middle;
  margin-left: 20px;
}

.reg-list .phone {
  width: 200px;
  float: left;
}

.reg-list a {
  float: left;
  background-color: #da4d00;
  font-size: 14px;
  color: #fff;
  display: inline-block;
  width: 100px;
  line-height: 46px;
  text-indent: 1em;
}

.reg-list .yzma {
  width: 150px;
}

.reg-bottom {
  margin-left: 40px;
  margin-bottom: 20px;
}

.bottom-list li {
  float: left;
}

.bottom-list label {
  font-size: 14px;
  margin-right: 20px;
}

.bottom-list input[type="radio"] {
  margin-right: 10px;
}

.list p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
}

.list {
  margin-top: 60px;
  margin-bottom: 30px;
}

.list li {
  float: left;
}

.list input[type="checkbox"] {
  margin-right: 10px;
}

.list a {
  font-size: 12px;
  color: #0a8fc1;
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
  margin-bottom: 20px;
}

.submit:hover {
  background-color: #0a8fc1;
}

.fa-check-circle {
  color: green;
}
</style>
<template>
  <section>
    <div class="register">
      <ul class="reg-list clearfix">
        <li>
          <label>用户名</label>
        </li>
        <li>
          <input
            type="text"
            v-on:blur="userWarn"
            v-on:focus="userInfo"
            v-model="userInput"
          >
        </li>
        <li>
          <span v-show="username">
            4-18个字符，一个汉字为两个字符，推荐使用中文会员名
          </span>
        </li>
        <li><span v-show="usernull">用户名不能为空</span></li>
        <li><span v-show="usershort">昵称太短</span></li>
        <li>
          <i v-show="usercheck" class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
      </ul>
      <ul class="reg-list clearfix">
        <li>
          <label>密码</label>
        </li>
        <li>
          <input type="password" v-on:blur="passWarn" v-on:focus="passInfo" v-model="passInput">
        </li>
        <li>
          <span v-show="password">
            6-16个字符，建议使用字母加数字或符号的组合密码
          </span>
        </li>
        <li><span v-show="passnull">密码不能为空</span></li>
        <li><span v-show="passshort">长度:6-16位</span></li>
        <li>
          <i v-show="passcheck" class="fa fa-check-circle" aria-hidden="true"></i>
        </li>
      </ul>
      <ul class="reg-list clearfix">
        <li>
          <label>确定密码</label>
        </li>
        <li>
          <input type="text">
        </li>
        <li><span v-show="false">密码不一致</span></li>
      </ul>
      <ul class="reg-list clearfix">
        <li>
          <label>验证码</label>
        </li>
        <li>
          <input class="yzm" type="text">
          <img src="../assets/login/verify.jpeg" alt="">
        </li>
        <li><span v-show="false">请先输入4位图形验证码</span></li>
      </ul>
      <ul class="reg-list clearfix">
        <li>
          <label>验证手机</label>
        </li>
        <li>
          <input class="phone" type="text">
          <a href="#">获取验证码</a>
        </li>
        <li><span v-show="false">手机号不能为空</span></li>
      </ul>
      <ul class="reg-list clearfix">
        <li>
          <label>验证码</label>
        </li>
        <li>
          <input class="yzma" type="text">
        </li>
      </ul>
      <div class="reg-bottom">
        <ul class="bottom-list clearfix">
          <li>
            <input type="radio" name="user-name" checked>
          </li>
          <li>
            <label>个人用户</label>
          </li>
          <li>
            <input type="radio" name="user-name">
          </li>
          <li>
            <label>机构用户</label>
          </li>
        </ul>
        <ul class="list clearfix">
          <li>
            <input type="checkbox">
          </li>
          <li>
            <p>我同意《<a href="#">贝通网注册协议</a>》及《<a href="#">贝通网投资咨询与管理服务协议</a>》</p>
          </li>
        </ul>
        <ul class="bottom-list clearfix">
          <li><a class="submit" href="#">注册</a></li>
        </ul>
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
      rpassInput: '',
      vcode: '',
      phone: '',
      insertcode: '',
      username: false,
      usernull: false,
      usershort: false,
      usercheck: false,
      password: false,
      passnull: false,
      passshort: false,
      passcheck: false,
    }
  }, //data:function(){return {user:false,password:false}}
  methods: {
    userWarn() {
      this.username = false;
      if (!this.userInput.trim()) {
        this.usernull = true;
        this.usershort = false
        this.usercheck = false
      } else {
        this.usernull = false;
        if (this.userInput.trim().length<4) {
          this.usershort = true
          this.usercheck = false
        } else {
          this.usershort = false
          this.usercheck = true
        }
      }
    },
    userInfo() {
      if (!this.userInput.trim()) {
        this.username = true;
      } else {
        if (this.userInput.trim().length<4) {
          this.usershort = true
        } else {
          this.usercheck = true
        }
      }
    },
    passWarn() {
      this.password = false;
      if (!this.passInput.trim()) {
        this.passnull = true;
        this.passshort = false
        this.passcheck = false
      } else {
        this.passnull = false;
        if (this.passInput.trim().length<4) {
          this.passshort = true
          this.passcheck = false
        } else {
          this.passshort = false
          this.passcheck = true
        }
      }
    },
    passInfo() {
      if (!this.passInput.trim()) {
        this.password = true;
      } else {
        if (this.passInput.trim().length<4) {
          this.passshort = true
        } else {
          this.passcheck = true
        }
      }
    },
  }
}
</script>
