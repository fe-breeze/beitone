<style scoped>
  header {
    background-color: #F5F5F5;
    border-top: 1px solid #E0E1E1;
    border-bottom: 1px solid #E0E1E1;
    color: #535353;
  }
  div {
    margin: 0 auto;
    min-width: 1200px;
    width: 1200px;
    line-height: 38px;
    font-size: 14px;
  }
  i,
  span {
    line-height: 38px;
    font-weight: bold;
    margin-right: 5px;
  }
  ul {
    float: right;
  }
  li {
    float: left;
    width: 78px;
    text-align: center;
  }
  a {
    line-height: 38px;
    width: 100%;
  }
  a:hover{
    color:#0768AB;
    font-weight: bold;
  }
</style>

<template>
  <header>
    <div class="clearfix">
      <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
      <span>服务热线</span>
      <span>400-681-3966</span>
      <span>网络借贷信息中介</span>
      <ul>
        <li>
          <a class="d-inline-block" href="#">手机APP</a>
        </li>
        <li>
          <a class="d-inline-block" v-link="{ name: 'register' }">免费注册</a>
        </li>
        <li>
          <a class="d-inline-block" v-link="{ name: 'login' }">立即登录</a>
        </li>
      </ul>
    </div>
  </header>
</template>

