<template>
  <div id="app">
    <div>
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
          <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
      </button>
    </div>
    <div id="nav">
      <router-link to="/">{{ $t('home') }}</router-link> |
      <router-link to="/newQuote">{{ $t('newQuote') }}</router-link> |
      <router-link to="/quotes">{{ $t('quotes') }}</router-link> |
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
    import i18n from '@/plugins/i18n'
    import FlagIcon from 'vue-flag-icon'
    export default {
        name: 'app',
        data() {
            return {
                languages: [
                    { flag: 'us', language: 'en', title: 'English' },
                    { flag: 'es', language: 'es', title: 'Español' }
                ]
            };
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
    }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
        padding: 5px;
        border: 1px solid green;
        font-size: 12px;
        margin: 10px;
    }
$light-blue: hsl(194, 49%, 73%);
$dark-blue: hsl(221, 49%, 33%);
$dark-green: hsl(166, 72%, 28%);
$light-green: hsl(156, 72%, 73%);
$gray: hsl(210, 36%, 96%);
body{
  margin:0;
}
div.quote-left{
  position:relative;
  display:flex;
  flex-direction:row;
  //align-items:center;
  align:center;
  width:100%;
  min-height:100%;
  max-height:100%;
  border-radius: 16px;
  background-color: $dark-blue;
  box-shadow:0px 0px 15px gray;
  margin-bottom:60px;

  div.quote-image{
    width:40%;
    height:inherit;
    background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/812449/user-blue1.jpg);
    background-position:center;
    background-size: cover;
    border-radius: 16px 0px 0px 16px;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }
  div.quote-circle{
    position:absolute;
    left:31%;
    top:40%;
    z-index:10;
    height:50px;
    width:50px;
    border-radius: 50%;
    background-color:white;
    color:$dark-blue;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    }
  }

div.quote-circle-inner{
  height:35px;
  width:35px;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  box-shadow:0px 0px 10px $dark-blue;
}
div.quote-text{
  flex:1;
  padding:10px 30px 10px 30px;
  border-radius: 0px 16px 16px 0px;
  color:white;
  font-family: proxima-nova, sans-serif;
  font-style:italic;
  font-size:18px;
  font-weight:100;
  line-height:22px;

div.quote-author{
    text-align:right;
    font-size:20px;
    font-weight:500;
    font-style:normal;
    color:$light-blue;
  }

  div.quote-to{
    text-align:left;
    font-size:20px;
    font-weight:500;
    font-style:normal;
    color:$light-blue;
  }
}
div.quote-right{
  position:relative;
  display:flex;
  flex-direction:row;
  //align-items:center;
  align:center;
  width:100%;
  min-height:100%;
  max-height:100%;
  border-radius: 16px;
  background-color: $dark-green;
  box-shadow:0px 0px 15px gray;
  margin-bottom:60px;

div.quote-image{
    width:40%;
    height:inherit;
    background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/812449/user-gray1.jpg);
    background-position:center;
    background-size: cover;
    border-radius: 0px 16px 16px 0px;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  }

div.quote-circle{
    position:absolute;
    right:31%;
    top:40%;
    z-index:10;
    height:50px;
    width:50px;
    border-radius: 50%;
    background-color:white;
    color:$dark-green;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    div.quote-circle-inner{
      height:35px;
      width:35px;
      border-radius: 50%;

      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      box-shadow:0px 0px 10px $dark-green;
    }
  }
  div.quote-text{
    flex:1;
    padding:10px 20px 10px 40px;
    border-radius: 0px 16px 16px 0px;
    color:white;
    font-family: proxima-nova, sans-serif;
    font-style:italic;
    font-size:18px;
    font-weight:100;
    line-height:22px;

div.quote-author{
      text-align:right;
      font-size:20px;
      font-weight:500;
      font-style:normal;
      color:$light-green;
    }
    div.quote-to{
      text-align:left;
      font-size:20px;
      font-weight:500;
      font-style:normal;
      color:$light-green;
    }
  }
}
</style>
