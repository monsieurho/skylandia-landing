<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

	<section id="hero">

<video class="video-background" autoplay muted loop playsinline>
  <source src="https://assets.codepen.io/4625073/background.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="video-overlay"></div>

<div class="hero-text-container">
	  <h1>MMORPG ADVENTURE FANTASY GAME</h1>
  <p>
	  Skykandia is a medieval fantasy massively multiplayer online role-playing game featuring PvP as a key game dynamic to incentivise players to team up.
Create and join guilds (DAOs) to form alliances and fight for control of the world.
  </p>
<a class="getupdates-inline" href="/">Get updates</a>
</div>

<div class="trailer">
	<h4>Trailer</h4>
	<div class="trailer-content">
		<h4>Coming soon</h4>
	
<video class="video-trailer" autoplay muted loop>
  <source src="https://assets.codepen.io/4625073/Untitled.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>	
</div>

</section>
<style>
	
#hero
{
position:relative;
min-height:100vh;
}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		overflow: hidden;
	}

	.video-background{
		min-width:100%;
		min-height:100%;
		    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%); /* % of current element */
	}

	.video-overlay
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.2);
	}
		.trailer
	{
		position:absolute;
		bottom:0px;
		right:0px;
		width:20%;
		padding-right:20px;
		padding-bottom:20px;
		display:flex;
		flex-direction:column;

		display:none;
	}
	.trailer h4
	{
color:#fff;
margin:0px;
margin-bottom:5px;
	}
	.trailer-content
	{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.trailer-content h4
	{
color:white;
position:absolute;
	}
	.video-trailer
	{

		width:100%;
	}

	.hero-text-container
	{
		position:absolute;
		left:15%;
		display:flex;
		flex-direction:column;
		justify-content:left;
		align-items:left;
		text-align:left;
		color:#fff;
	}
		.hero-text-container h1
	{
		color:#fff;
		max-width:400px;
		margin:0px;
		text-align:left;
	}
			.hero-text-container p
	{
		color:#fff;
		max-width:400px;
		margin:0px;
		text-align:left;
	}

	.getupdates-inline
	{
color:white;
margin-top:20px;
text-decoration:none;
	}



</style>
