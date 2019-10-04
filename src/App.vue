<template>
  <div id="app">
    <!-- <header>
      <span>Vue.js PWA</span>
    </header> -->
    <main>
      <router-view></router-view>
    </main>
    <!-- Start NavBar -->
    <nav class="navbar fixed-bottom text-center navbar-light bg-light d-flex justify-content-around">
      <div class="row">
          <div class="col hvr-push mx-2" onclick="window.location='/';">
            <img src="../static/images/homeicon.png" width="50%"><br>
              <span style="font-size: 0.7em">Home</span>
          </div>
          <!-- <div class="col hvr-push mx-2" onclick="window.location='/';">
            <img src="../static/images/newspaper64.png" width="50%"><br>
            <span style="font-size: 0.7em">News</span>
          </div> -->
          <div class="col hvr-push mx-2" onclick="window.location='#/score';">
            <img src="../static/images/scoreboard64.png" width="50%"><br>
            <span style="font-size: 0.7em">Score</span>
          </div>
          <div class="col hvr-push mx-2" onclick="window.location='#/closing';">
            <img src="../static/images/closingicon.png" width="50%"><br>
            <span style="font-size: 0.7em">Django</span>
          </div>
          <div class="col hvr-push mx-2" onclick="window.location='#/merch';">
            <img src="../static/images/clothes.png" width="50%"><br>
            <span style="font-size: 0.7em">Merch</span>
          </div>
      </div>
    </nav>
    <!-- End NavBar -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0
  }
</style>