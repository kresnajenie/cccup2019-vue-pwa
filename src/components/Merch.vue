<template>
  <div class="hello">
    <body style="background-color: #111;">
    
    <div class="container-fluid" style="margin-bottom: 80px; padding-top: 20px;">
      <div class="text-center text-white">
          <h1 class="legendm54" style="font-size: 3.5em">Merchandise</h1>
          <p style="font-size: 0.7em;">Kenangan memang sulit dilupakan. Bawa pulang kenangan menarik dari CC CUP 2019 dengan merchandise official dari kami.</p>
      </div>
      
      <div class="text-center">
          <img src="../../static/images/04_merch/merchblack.png" alt="Shirt A" style="width:100%;">
          <img src="../../static/images/04_merch/merchwhite.png" alt="Shirt B" style="width:100%;">
          <img src="../../static/images/04_merch/merchbandblack.png" alt="Wristband A" style="width:100%;">
          <img src="../../static/images/04_merch/merchbandred.png" alt="Wristband B" style="width:100%;">
          <img src="../../static/images/04_merch/merchtotebag.png" alt="Tote Bag" style="width:100%;">
      </div>
    </div>
  </body>
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

<style type="text/css">
  .center-er{
        margin:auto;
      }
      #bottommerch{
        bottom: 0;
      }
      #welcome{
        background-image: url(../../static/images/02_bg/webwelcomeup.png);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      #about{
        background-image: url(../../static/images/02_bg/webwelcome.png);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      #aboutbg{
        background-image: url(../../static/images/02_bg/webwelcome.png);
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