<template>
  <div class="hello">
    <!-- Start Carousel News Top -->
    <section>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false"> 
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="#"><img class="d-block w-100" src="../../static/images/04_merch/merchblack.png" alt="First slide"></a>
            <div class="carousel-caption">
              <a href="#"><h5>Ini berita</h5>
              <p>Ini isinya</p></a>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" href="canisiuscup.html" src="../../static/images/04_merch/merchblack.png" alt="Second slide">
            <div class="carousel-caption">
              <h5>Ini berita</h5>
              <p>Ini isinya</p>
            </div>
            
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../static/images/04_merch/merchblack.png" alt="Third slide">
            <div class="carousel-caption">
              <h5>Ini berita</h5>
              <p>Ini isinya</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- End Carousel News Bottom -->

    <!-- Start First Menu -->
    <section class="px-3" style="margin-top: 20px;">
      <div class="container text-center px-3">
        <div class="row d-flex justify-content-around">
          <div class="col p-2 mx-2 box hvr-push" onclick="window.location='/';">
            <img src="../../static/images/home.png" style="width: 75%;"><br>
            Home
          </div>
          <div class="col p-2 mx-2 box hvr-push" onclick="window.location='/';">
            <img src="../../static/images/newspaper.png" style="width: 75%;"><br>
            News
          </div>
          <div class="col p-2 mx-2 box hvr-push " onclick="window.location='/';">
            <img src="../../static/images/scoreboard.png" style="width: 75%;"><br>
            Score
          </div>
          <div class="col p-2 mx-2 box hvr-push" onclick="window.location='/';">
            <img src="../../static/images/tshirt.png" style="width: 75%;"><br>
            Merch
          </div>
        </div>
      </div>
    </section>
    <!-- End First Menu -->

    <!-- Start Second News Carousel -->
    <section class="px-3" style="margin-top: 50px;">
      <div class="container testimonial-group">
        <h1>NEWS</h1>
        <div class="row text-center">
          <div class="col-5 p-2 mx-2 box newsthumb">lorem ipsum</div>
          <div class="col-5 p-2 mx-2 box newsthumb">lorem ipsum</div>
          <div class="col-5 p-2 mx-2 box newsthumb">lorem ipsum</div>
          <div class="col-5 p-2 mx-2 box newsthumb">lorem ipsum</div>
        </div>
      </div>
    </section>
    <!-- End Second News Carousel -->

    <!-- Start Merch Carousel -->
    <section style="margin-top: 50px;">
      <div class="merch text-center">
        <div id="merch" class="carousel slide" data-ride="carousel">
            
          <ul class="carousel-indicators">
            <li data-target="#merch" data-slide-to="0" class="active"></li>
            <li data-target="#merch" data-slide-to="1"></li>
            <li data-target="#merch" data-slide-to="2"></li>
            <li data-target="#merch" data-slide-to="3"></li>
            <li data-target="#merch" data-slide-to="4"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../static/images/04_merch/merchblack.png" alt="Shirt A" style="width:100%;">
            </div>
            <div class="carousel-item">
              <img src="../../static/images/04_merch/merchwhite.png" alt="Shirt B" style="width:100%;">
            </div>
            <div class="carousel-item">
              <img src="../../static/images/04_merch/merchbandblack.png" alt="Wristband A" style="width:100%;">
            </div>
            <div class="carousel-item">
              <img src="../../static/images/04_merch/merchbandred.png" alt="Wristband B" style="width:100%;">
            </div>
            <div class="carousel-item">
              <img src="../../static/images/04_merch/merchtotebag.png" alt="Tote Bag" style="width:100%;">
            </div>
          </div>

          <a class="carousel-control-prev" href="#merch" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#merch" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>

        </div>
      </div>
    </section>
    <!-- End Merch Carousel -->

    <!-- Start Trailer -->
    <section class="px-3" style="margin-top: 50px;">
      <div class="container px-3">
        <h1>Trailer</h1>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/DghAySDRKaM"></iframe>
        </div>
      </div>
    </section>
    <!-- End Trailer -->

    <!-- Start Announcments Footer -->
    <section class="px-3" style="margin-top: 50px;margin-bottom: 100px">
      <div class="container">
        <h1>Announcment</h1>
        <div class="row my-3">
          <div class="col-4">
            Technical Meeting
          </div>
          <div class="col-8">
            05 Oktober 2019 <br>
            Aula lt. 4 SMA Kolese Kanisius <br>
            Pukul 09.00 - 12.00 WIB
          </div>
        </div>
      </div>
    </section>
    <!-- End Announcments -->

    <!-- Start NavBar -->
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
        <img class="headerlogo" src="../../static/images/01_logo/logo-horizontal.png" style="width: 25%">
      </a>
    </nav>
    <nav class="navbar fixed-bottom text-center navbar-light bg-light d-flex justify-content-around pl-5">
      <a href="/">
        <img src="../../static/images/homeicon.png" width="50%"><br>
        <span style="font-size: 0.7em">Home</span>
      </a>
      <a href="/">
        <img src="../../static/images/newspaper64.png" width="50%"><br>
        <span style="font-size: 0.7em">News</span>
      </a>
      <a href="/">
        <img src="../../static/images/scoreboard64.png" width="50%"><br>
        <span style="font-size: 0.7em">Score</span>
      </a>
      <a href="/">
        <img src="../../static/images/merchandise64.png" width="50%"><br>
        <span style="font-size: 0.7em">Merch</span>
      </a>
    </nav>
    <!-- End NavBar -->

  </div>
</template>

<script>
  import GithubService from '@/services/GithubService'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'VueJS PWA consuming Github API',
        username: '',
        user: null
      }
    },
    methods: {
      async getUserData () {
        this.user = null
        const result = await GithubService.searchUser({
          username: this.username
        }).then(response => {
          this.user = response.data
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
        console.log(result)
        if (this.user !== null) {
          console.log(this.user)
        }
      }
    }
  }
</script>

<style>
  .center-er{
    margin:auto;
  }
  #bottommerch{
    bottom: 0;
  }
  #welcome{
    /* background-image: url(../../static/images/02_bg/webwelcomeup.png); */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #about{
    /* background-image: '../../static/images/'; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .vcenter {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .box{
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid #c2bcc2;
  }
  /* The heart of the matter */
    .testimonial-group > .row {
      overflow-x: auto;
      white-space: nowrap;
      flex-wrap: nowrap;
    }
    .testimonial-group > .row > .col-5 {
      display: inline-block;
      float: none;
    }
    .newsthumb{
      height: 125px;
    }
    </style>