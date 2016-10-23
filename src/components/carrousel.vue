<style scoped>
.my-swipe {
  height: 350px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url(../assets/carrousel/1.jpg);
  background-position: 50%;
}

.slide2 {
  background-position: 50%;
  background-image: url(../assets/carrousel/2.jpg);
}

.slide3 {
  background-position: 50%;
  background-image: url(../assets/carrousel/3.jpg);
}

.slide4 {
  background-position: 50%;
  background-image: url(../assets/carrousel/4.gif);
}

section {
  position: absolute;
  top: 10px;
  right: 0;
  background-color: #fff;
  opacity: 0.8;
  text-align: center;
  z-index: 1;
}

.borrowing {
  width: 310px;
  border-bottom: 1px solid #f7dcb6;
}

.borrowing dt,
.earnings dt:first-of-type {
  margin-top: 30px;
  font-size: 16px;
  color: #666;
}

.borrowing dd,
.earnings dd:first-of-type {
  color: red;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 24px;
}

.carrousel {
  position: relative;
}
.tab{
  position: absolute;
  width: 1200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: red;
}
.earnings dt:last-of-type a {
  display: block;
  width: 90%;
  height: 45px;
  margin: 0 auto;
  background: #f39800;
  font-size: 24px;
  line-height: 45px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}

.earnings dd:last-of-type {
  margin-top: 14px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
}

.earnings dd:last-of-type a {
  font-size: 12px;
  color: #0768ab;
  font-weight: bold;
}
</style>
<template>
  <div class="carrousel">
    <swiper :options="swiperOption" class="my-swipe">
      <swiper-slide class="slide1"></swiper-slide>
      <swiper-slide class="slide2"></swiper-slide>
      <swiper-slide class="slide3"></swiper-slide>
      <swiper-slide class="slide4"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="tab">
      <section>
        <dl class="borrowing">
          <dt>已撮合借款</dt>
          <dd><strong>￥275,792,450</strong></dd>
        </dl>
        <dl class="earnings">
          <dt>已发放收益</dt>
          <dd><strong>￥12,213,121</strong></dd>
          <dt><a>免费注册</a></dt>
          <dd>已有账号？<a href="">立即登录</a></dd>
        </dl>
      </section>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          name: 'currentSwiper',
          autoplay: 5000,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          loop : true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
