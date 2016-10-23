<style scoped>
  nav{
    background-color: #fff;
  }
  div {
    margin: 0 auto;
    min-width: 1200px;
    width: 1200px;
    font-size: 14px;
    position: relative;
  }
  img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  ul {
    float: right;
    font-size: 18px;
    color: #666;
  }
  li {
    float: left;
    width: 82px;
    line-height: 116px;
    text-align: center;
  }
  a {
    line-height: 38px;
    width: 100%;
  }
  li:last-child a,li:nth-of-type(6) a{
    background-color: #1658FF;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
  a:hover{
    background-color: #1658FF;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
</style>
<template>
  <nav>
    <div class="clearfix">
      <a v-link="{name:'index'}">
        <img src="../assets/nav/logo.png" height="59" width="352" alt="">
      </a>
      <ul>
        <li>
          <a class="d-inline-block" href="#">首页</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">安全保障</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">投资攻略</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">新手指引</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">我的账户</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">我要用钱</a>
        </li>
        <li>
          <a class="d-inline-block" href="#">我要投资</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  
</script>
