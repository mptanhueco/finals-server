<template>
 <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Links</h5>
					<ul class="list-unstyled quick-links">
						<router-link class="spacing adjust" v-for="routes in links" 
             v-bind:key="routes.id"
              :to="`${routes.page}`">{{routes.text}}</router-link>
					</ul>
				</div>
        <div class="col-xs-12 col-sm-4 col-md-8">
					<h5>About</h5>
					<p style="color: #fff; font-size: 20px;">Lorem Ipsum is simply dummy text of the printing and typesetting
           industry. Lorem Ipsum has been the industry's standard dummy
           text ever since the 1500s, when an unknown printer took a galley
           of type and scrambled it to make a type specimen book. It has
           survived not only five centuries, but also the leap into electronic
           typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem
           Ipsum passages, and more recently with desktop publishing
           software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="#">Holy Angel University</a></u>&nbsp;School of Computing, Web Development, WCSERVER</p>
				</div>
			<hr>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
  name: 'Footer',
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
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #000000;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: #2f2d2d !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}

.adjust{
  display: grid;
  line-height: 3.5rem;
}
</style>