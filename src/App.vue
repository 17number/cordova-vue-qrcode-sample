<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/qrView">QRコード 表示</router-link> |
      <router-link to="/qrReader">QRコード 読取り(vue)</router-link> |
      <router-link to="/qrReaderCordova">QRコード 読取り(cordova)</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
