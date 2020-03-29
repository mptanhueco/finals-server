<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand text-light" href="#" style="text-shadow: 3px 3px #000000;"><strong>WCSERVER</strong></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Members',
          page:'/Members'
        },
        {
          id: 2,
          text: 'News',
          page:'/News'
        },
        {
          id: 3,
          text: 'Events',
          page:'/Events'
        },
        {
          id: 4,
          text: 'Login',
          page:'/Login'
        },
        {
          id: 5,
          text: 'Signup',
          page:'/Signup'
        }
      ]
    }
  }
}
</script>

<style> 
  .spacing { 
    Margin-right: 10px; 
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    padding-left: 30px;
    text-shadow: 3px 3px #000000;
  } 
  .spacing a{
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    
  }
</style>