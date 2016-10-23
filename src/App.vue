<template>
  <div id="app">
    <c-header></c-header>
    <c-nav></c-nav>
    <main>
      <router-view></router-view>
    </main>
    <c-footer></c-footer>
  </div>
</template>

<script>
import cHeader from './components/header';
import cNav from './components/nav';
import cFooter from './components/footer';

export default {
  components: {
    cHeader,
    cNav,
    cFooter
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
  }
  body{
    background-color: #f0f4f7;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  dl,dd,dt{
    margin: 0;
    padding: 0;
  }
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  .d-block {
    display: block !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-inline {
    display: inline !important;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  .text-justify {
    text-align: justify !important;
  }

</style>
