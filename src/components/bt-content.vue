<style scoped>
.content {
  width: 1200px;
  height: auto;
  margin: 20px auto;
  overflow: hidden;
}

.con-left {
  width: 904px;
  height: auto;
  margin-right: 16px;
  float: left;
  overflow: hidden;
}

.con-right {
  width: 280px;
  height: auto;
  float: right;
}

.ad-con {
  width: 904px;
  height: auto;
  padding-top: 0px;
  margin-bottom: 25px;
  overflow: hidden;
  text-align: center;
  color: #9d9d9d;
}

.ad-con >li {
  float: left;
  width: 33.3333%;
}

.ad-con >li>h4 {
  margin: 0;
}

.ad-info {
  font-size: 14px;
  text-align: center;
  list-style-type: square;
  list-style-position: inside;
}

.ad-info>li {
  padding-left: 118px;
  text-align: left;
  line-height: 22px
}

.table {
  width: 100%;
  max-width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  background-color: #fff;
  margin-bottom: 20px;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}

.table>thead>tr>th {
  vertical-align: middle;
  border-bottom: 2px solid #ddd;
  height: 49px;
  font-weight: normal;
  font-size: 18px;
}

.table>thead>tr>th:first-child,
.table>tbody>tr>td:first-child {
  text-align: left;
  text-indent: 1em;
}

.table>thead>tr>th:first-child {
  font-size: 22px;
}

.table>thead>tr>th:first-child>img {
  width: 24px;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
}

.table>tbody>tr>td {
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
  height: 47px;
}

.bao,
.zhu {
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
}

.bao {
  background-color: #f7b52c;
}

.zhu {
  background-color: #ec6944;
}

.pre {
  font-size: 24px;
  color: #f5a842;
  font-weight: bold;
}

.amount {
  font-size: 24px;
  color: #7c7c7c;
  font-weight: bold;
}

.info {
  font-size: 12px;
  color: #7c7c7c;
}

progress {
  width: 50px;
}

.span-pro {
  font-size: 14px;
  font-weight: bold;
  color: #7c7c7c;
}

.table>thead>tr>.more {
  font-size: 14px;
  color: #0074fe;
}

.table>thead>tr>.more:hover {
  text-decoration: underline;
}

video {
  width: 100%;
  margin-bottom: 14px;
}

.con-lm {
  width: 280px;
  /*height: 304px;*/
  background: #fff;
  padding: 20px;
  padding-top: 0px;
  margin-bottom: 14px;
  overflow: hidden;
}

.con-lm h2 {
  font-size: 18px;
  color: #292828;
  width: auto;
  height: 43px;
  line-height: 43px;
  margin-bottom: 4px;
  font-weight: normal;
  clear: both;
  overflow: hidden;
  margin-top: 0;
}

.con-lm h2 a {
  float: right;
  padding-top: 0px;
  font-size: 14px;
  color: #0074fe;
  font-weight: bold;
}

.con-lm ul li {
  padding-bottom: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.con-lm ul li a {
  font-size: 14px;
  color: #0768ab;
  overflow: hidden;
}

.img-d{
  margin-top: 16px;
  margin-bottom: 10px;
}

.huan{
  display: block;
  margin: auto;
  width: 50px;
  height: 24px;
  line-height: 24px;
  background: #c7cacd;
  font-size: 14px;
  color: #a3a3a4;
  border-radius: 5px;
  overflow: hidden;
}
</style>
<template>
  <section class="content">
    <div class="con-left">
      <ul class="ad-con">
        <li>
          <img src="../assets/bt-content/sy-icon01.png" alt="">
          <h4>门槛低</h4>
          <ul class="ad-info">
            <li>VIP式服务</li>
            <li>50元起投</li>
            <li>操作简单</li>
          </ul>
        </li>
        <li>
          <img src="../assets/bt-content/sy-icon02.png" alt="">
          <h4>更安全</h4>
          <ul class="ad-info">
            <li>国资控股</li>
            <li>资金托管</li>
            <li>政府监管</li>
          </ul>
        </li>
        <li>
          <img src="../assets/bt-content/sy-icon03.png" alt="">
          <h4>更便捷</h4>
          <ul class="ad-info">
            <li>债权转让</li>
            <li>高收益同享</li>
            <li>提现快速</li>
          </ul>
        </li>
      </ul>
      <div class="cp-con">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <img src="../assets/bt-content/beitone.png" alt="">
                <a href="">贝优宝</a>
              </th>
              <th></th>
              <th>年化收益率</th>
              <th>金额</th>
              <th>期限</th>
              <th>进度</th>
              <th class="more"><a href="">更多>></a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td>
                <span class="pre">8.30%</span>
              </td>
              <td class="info">
                <span class="amount">300.00</span>万元
              </td>
              <td class="info">
                <span class="amount">2</span>个月
              </td>
              <td>
                <progress value="100" max="100"></progress>
                <span class="span-pro">100%</span>
              </td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
          </tbody>
        </table>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <img src="../assets/bt-content/beitone.png" alt="">
                <a href="">贝优宝</a>
              </th>
              <th></th>
              <th>年化收益率</th>
              <th>金额</th>
              <th>期限</th>
              <th>进度</th>
              <th class="more"><a href="">更多>></a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
          </tbody>
        </table>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <img src="../assets/bt-content/beitone.png" alt="">
                <a href="">贝优宝</a>
              </th>
              <th></th>
              <th>年化收益率</th>
              <th>金额</th>
              <th>期限</th>
              <th>进度</th>
              <th class="more"><a href="">更多>></a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
            <tr>
              <td><a href="">贝优宝L161001</a></td>
              <td>
                <span class="bao">保</span>
                <span class="zhu">助</span>
              </td>
              <td><span class="pre">8.30%</span></td>
              <td class="info"><span class="amount">300.00</span>万元</td>
              <td class="info"><span class="amount">2</span>个月</td>
              <td>
                <progress value="100" max="100"></progress><span class="span-pro">100%</span></td>
              <td><span class="huan">还款中</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="con-right">
      <video src="../../static/1.mp4" controls="controls">
        your browser does not support the video tag
      </video>
      <div class="con-lm">
        <h2><a href="/notice/front/listFront.html" target="_blank">更多&gt;&gt;</a><strong>官方公告</strong></h2>
        <!-- 官方公告内容开始 -->
        <ul class="con-gg">
          <li><a href="/notice/front/toLook.html?id=216" target="_blank">10月20日，贝优宝L161002标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=215" target="_blank">10月19日，贝优宝L161001标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=214" target="_blank">贝通网2016年国庆节假期业务受理及值班公告</a></li>
          <li><a href="/notice/front/toLook.html?id=213" target="_blank">9月23日，贝优宝L160909/贝优宝L160910标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=212" target="_blank">中秋团圆礼：接“来自月球的饼”，赢取红包</a></li>
          <li><a href="/notice/front/toLook.html?id=211" target="_blank">贝通网2016年中秋节假期业务受理及值班公告</a></li>
          <li><a href="/notice/front/toLook.html?id=210" target="_blank">9月14日，贝优宝L160906/贝优宝L160907/贝优宝L160906标的信息</a></li>
        </ul>
        <!-- 官方公告内容结束 -->
      </div>
      <div class="con-lm">
        <h2><a href="/notice/front/listFront.html" target="_blank">更多&gt;&gt;</a><strong>官方公告</strong></h2>
        <!-- 官方公告内容开始 -->
        <ul class="con-gg">
          <li><a href="/notice/front/toLook.html?id=216" target="_blank">10月20日，贝优宝L161002标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=215" target="_blank">10月19日，贝优宝L161001标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=214" target="_blank">贝通网2016年国庆节假期业务受理及值班公告</a></li>
          <li><a href="/notice/front/toLook.html?id=213" target="_blank">9月23日，贝优宝L160909/贝优宝L160910标的信息</a></li>
          <li><a href="/notice/front/toLook.html?id=212" target="_blank">中秋团圆礼：接“来自月球的饼”，赢取红包</a></li>
          <li><a href="/notice/front/toLook.html?id=211" target="_blank">贝通网2016年中秋节假期业务受理及值班公告</a></li>
          <li><a href="/notice/front/toLook.html?id=210" target="_blank">9月14日，贝优宝L160906/贝优宝L160907/贝优宝L160906标的信息</a></li>
        </ul>
        <!-- 官方公告内容结束 -->
      </div>
    </div>
    <img class="img-d" src="../assets/bt-content/img-d.png" alt="">
  </section>
</template>
<script>
import currentSwiper from '../components/carrousel.vue'
export default {
  components: {
    currentSwiper,
  }
}
</script>
