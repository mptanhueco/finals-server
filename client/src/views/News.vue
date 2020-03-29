<template>
<section class="main">
<div class="container mt-4 background-form">
    <h1 class="text-center mb-4 p-4 text-light" style="text-shadow: 3px 3px #000000;">News Articles</h1>
      <div class="row">

   <div class="card-columns">
  <div class="card shadow border-0">
    <img class="card-img-top" src="../assets/news3.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Concerns In Philippines After Duterte Given Emergency Powers To Fight COVID-19 Spread</h5>
      <p class="card-text">In the Philippines, Congress granted President Rodrigo Duterte special temporary powers on Tuesday to manage the COVID-19 crisis that continues to surge in the country of 110 million people.To date, there are 552 confirmed cases, and 35 deaths.</p>
      <p class="card-text"><small class="text-muted">March 26, 2020</small></p>
    </div>
  </div>
  <div class="card shadow border-0  p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Singapore donates 40,000 COVID-19 test kits to PH.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">https://globalnation.inquirer.net/</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card shadow border-0">
    <img class="card-img-top" src="../assets/news5.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Live updates: Senate passes $2.2 trillion emergency relief package; Much of the world is under coronavirus lockdown</h5>
      <p class="card-text">The Senate unanimously passed a $2.2 trillion emergency relief package late Wednesday, concluding a grim day in which health departments around the United States reported more than 200 coronavirus-related deaths.</p>
      <p class="card-text"><small class="text-muted">March 26, 2020</small></p>
    </div>
  </div>
  <div class="card shadow border-0 bg-light text-black text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>China, U.S. to set aside differences in G20 coronavirus summit: SCMP</p>
      <footer class="blockquote-footer">
        <small>
          Source <cite title="Source Title">www.aljazeera.com</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card shadow border-0 text-center">
    <div class="card-body">
      <h5 class="card-title">US warship sails through Taiwan Strait amid tensions with China</h5>
      <p class="card-text">US says destroyer USS McCampbell conducted 'routine Taiwan Strait transit' in accordance with international law.</p>
      <p class="card-text"><small class="text-muted">Last updated 5 hours ago</small></p>
    </div>
  </div>
  <div class="card shadow border-0">
    <img class="card-img" src="../assets/news4.jpg" alt="Card image">
  </div>
  <div class="card shadow border-0 p-3 text-right">
    <blockquote class="blockquote mb-0">
      <h5 class="card-title">China in coronavirus propaganda push as US ties worsen</h5>
      <p>State media lauds China as global leader in fight against disease in bid to defuse criticism it allowed virus to spread.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Source <cite title="Source Title">www.aljazeera.com</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card shadow border-0">
    <div class="card-body">
      <h5 class="card-title">PH coronavirus cases spike to 636, death toll hits 38</h5>
      <p class="card-text">MANILA, Philippines – The Philippines’ confirmed cases of the novel coronavirus is now at 636 as the Department of Health (DOH) reported 84 new cases on Wednesday, March 25.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
   </div>
   </section>
</template>

<script>
export default {
  name: 'News',

}
</script>

<style>


.b-0 {
    bottom: 0;
}
.bg-shadow {
    background: rgba(76, 76, 76, 0);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(179, 171, 171, 0)), color-stop(49%, rgba(48, 48, 48, 0.37)), color-stop(100%, rgba(19, 19, 19, 0.8)));
    background: linear-gradient(to bottom, rgba(179, 171, 171, 0) 0%, rgba(48, 48, 48, 0.71) 49%, rgba(19, 19, 19, 0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
}
.top-indicator {
    right: 0;
    top: 1rem;
    bottom: inherit;
    left: inherit;
    margin-right: 1rem;
}
.overflow {
    position: relative;
    overflow: hidden;
}
.zoom img {
    transition: all 0.2s linear;
}
.zoom:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>