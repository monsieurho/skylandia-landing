<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>



<svelte:head>
	<title>About</title>

	  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
</svelte:head>

<script>
	import closebutton from '../assets/close.png';
  import maplines from '../assets/map-lines.png';
import { onMount } from 'svelte';

onMount(async () => {
let box = document.querySelector(".box");
let boxBoundingRect = box.getBoundingClientRect();
let boxCenter= {
	x: boxBoundingRect.left + boxBoundingRect.width/2, 
  y: boxBoundingRect.top + boxBoundingRect.height/2
};

document.addEventListener("mousemove", e => {
	let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);	    
	box.style.transform = `rotate(${angle}deg)`;  
})
});


// MODAL --------------------------------------------------

let active = false;
let active2 = false;
let active3 = false;
	</script>


<section id="about">

<div class="overlay-background"></div>
<div class="about-text-container">
  <h1>LORE</h1>
<p>Skylandia is a planet located in the metaverse of Genesya, which is inhabited by the Goddess Mintasya and the Mintos, a race of mortal humanoids.
  The two have had a tumultuous relationship over the course of history, culminating in a tragic event where the Mintasya almost destroyed Eathlandia.
</p>
</div>
<div class="key-points">
  <div class="map-lines"></div>
    <p on:click="{() => active = !active}" class="place"></p>
     <p on:click="{() => active2 = !active2}" class="place2"></p>
     <p on:click="{() => active3 = !active3}" class="place3"></p>
     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0" y="0" viewBox="0 0 490 490" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M0,480.086L150.771,245L0,9.914L490,245L0,480.086z" fill="#ffed00" data-original="#000000" class=""></path>
  </g></g></g></svg>
</div>

<div class="compass">
<div class="box player">
</div>
</div>

<!-- Modal 1 -->
<div class:active={active} class="modal-map place-content" >
  <div class="modal-map-inner">
      <img on:click="{() => active = !active}" src="{closebutton}" alt="close button"/>
  <h2>Headline 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>

  <!-- Modal 2 -->
<div class:active={active2} class="modal-map place-content">
  <div class="modal-map-inner">
      <img on:click="{() => active2 = !active2}" src="{closebutton}" alt="close button"/>
  <h2>Headline 2</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>

  <!-- Modal 3 -->
<div class:active={active3} class="modal-map place-content">
  <div class="modal-map-inner">
      <img on:click="{() => active3 = !active3}" src="{closebutton}" alt="close button"/>
  <h2>Headline 3</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>
</section>




<style>



#about
{
position:relative;
min-height:100vh;
background-image:url('../assets/map.jpg');
background-size:cover;
background-position: center;
}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
		overflow: hidden;
	}

.about-text-container
{
  color:#fff;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  z-index:0;
}
		.about-text-container h1
	{
		color:#fff;
		max-width:400px;
		margin:0px;
		text-align:center;
	}
			.about-text-container p
	{
		color:#fff;
		max-width:400px;
		margin:0px;
		text-align:center;
	}


.compass
{
width:200px;
height:200px;
border:solid #fff 1px;
border-radius:50%;

    position: absolute;
    right: 100px;
    bottom: 150px;


    display:flex;
    justify-content:center;
    align-items:center;
}

.compass:before
{
content:"N";
position:absolute;
top:0px;
color:#fff;
text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px rgb(0, 183, 255),
    0 0 82px rgb(0, 255, 242),
    0 0 92px #0fa,
    0 0 102px rgb(0, 238, 255),
    0 0 151px rgb(0, 255, 242);
}
.compass:after
{
content:"S";
position:absolute;
bottom:0px;
color:#fff;
text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px rgb(0, 183, 255),
    0 0 82px rgb(0, 255, 242),
    0 0 92px #0fa,
    0 0 102px rgb(0, 238, 255),
    0 0 151px rgb(0, 255, 242);
}

  .box{
    background-color: #fff;
    width: 3px;
    height: 200px;
    

}

/* Modal content */



.modal-map
{
  position:absolute;
  top:-2vh;
  opacity:0;
  visibility:hidden;
    min-height:100%;
  width:100%;
  background: rgba(24, 24, 24, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;  
    padding:40px;
    transition:all ease-in 0.2s;  
}

.modal-map-inner
{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:white;  
  padding:40px;  
max-width:600px;
    background: rgba(51, 51, 51, 0.4);
border-radius: 10px;
    border: 1px solid rgba(102, 101, 101, 0.2);
    position:absolute;
}

.modal-map-inner img
{
  width:25px;
  position:absolute;
  top:20px;
  right:20px;
  cursor:pointer;
}
.modal-map p
{
font-size:14px;
}

.active{
  opacity:1;
  visibility:visible;
  top:0;
  left:0;
  transition:all ease-in .2s;
}

.overlay-background
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.1);
	}

</style>
