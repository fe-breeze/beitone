<style scoped>
  footer{
    height:240px;
    background-color: #ededed;
  }
  .nav1{
    margin: 0 auto;
    width:427px;
    padding-top: 40px;
  }
  .nav1 li{
    float:left;
  }
  .nav1 a{
    font-size: 14px;
    color: #707070;
    padding-right: 6px;
  }
  .nav1 a:hover{
   color:#0768ab;
  }
  .nav2{
    margin: 0 auto;
    width:930px;
    padding:20px 0;
  }
  .nav2 li{
    float:left;
    padding-right: 10px;
    position: relative;
    height: 60px;
    line-height: 60px;
  }
  .img-list{
    background-image: url(../assets/footer/foot_picbg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    padding:13px 18px;
  }
  .nav2 img{
    vertical-align:middle;
  }
  .img-list div{
    float: left;
    margin: 0 2px;
    width:97px;
    height:37px;
  }
  .first{
    background-image: url(../assets/footer/norton.png);
    background-repeat: no-repeat;
  }
  .second{
    background-repeat: no-repeat;
    background-image: url(../assets/footer/versign.png);
  }
  .third{
    background-repeat: no-repeat;
    background-image: url(../assets/footer/chengxin.png);
  }
  .img-list div:nth-child(1):hover{
    background:url(../assets/footer/norton_hover.png) no-repeat;
  }
  .img-list div:nth-child(2):hover{
    background:url(../assets/footer/versign_hover.png) no-repeat;
  }
  .img-list div:nth-child(3):hover{
   background:url(../assets/footer/chengxin_hover.png) no-repeat; 
  }
  .wechat{
    position: absolute;
    top:-174px;
    left: -30px;
    z-index: 1;
  }
  p{
    text-align: center;
    font-size: 14px;
    color:#666;
  }
</style>
<template>
  <footer>
    <div class="container">
      <div class="header">
        <ul class="nav1 clearfix">
          <li><a href="">关于我们</a></li>
          <li><a href="">法律法规</a></li>
          <li><a href="">新手指引</a></li>
          <li><a href="">安全保障</a></li>
          <li><a href="">理财攻略</a></li>
          <li><a href="">友情链接</a></li>
        </ul>
      </div>
      <div class="middle">
        <ul class="nav2 clearfix">
          <li>
            <div class="img-list clearfix">
              <div class="first"></div>
              <div class="second"></div>
              <div class="third"></div>
            </div>
          </li>
          <li>
            <a href="">
              <img src="../assets/footer/xlwb.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/footer/txwb.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img 
                src="../assets/footer/btw.png" 
                alt="wechat" 
                v-on:mouseover="wechat = true;"
                v-on:mouseout="wechat = false"
              >
            </a>
            <img 
              src="../assets/footer/wxewm.png" 
              alt="" class="wechat" 
              v-show="wechat"
            >
          </li>
          <li>
            <a href="">
              <img src="../assets/footer/qqimg.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/footer/fwrx.png" alt="">
            </a>
          </li>
        </ul>
      </div>
      <p>
        版权所有&nbsp;&copy;&nbsp;
        青海创新金融信息服务有限公司&nbsp;&nbsp;
        青ICP备16000241号-1&nbsp;&nbsp;|&nbsp;&nbsp;
        投资有风险，购买需谨慎
      </p>
    </div>
  </footer>
</template>
<script>
  export default{
    data (){
      return {
        wechat :false
      }
    }
  }
</script>
