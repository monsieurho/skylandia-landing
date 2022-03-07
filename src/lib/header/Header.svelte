<script>
	import { page } from '$app/stores';
	import logo from '../../assets/logo.png';
import { onMount } from 'svelte';




// audio player starts -----------------
let increment = 0;

onMount(() => {
var timer;
var percent = 0;
var audio = document.getElementById("audio");
audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.getElementById("progress");
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}
});

let isPlaying = false;

function togglePlay (e) {
  e = e || window.event;
  var btn = e.target;
  if (!audio.paused) {
    btn.classList.remove('active');
    audio.pause();
    isPlaying = false;
  } else {
    btn.classList.add('active');
    audio.play();
    isPlaying = true;
  }
}
</script>

<header>
	<div class="logo">
		<a sveltekit:prefetch href="/">
			<img src={logo} alt="Skylandia" />
		</a>
	</div>

	<nav>
		<ul>
		
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/NFTs'}>
				<a sveltekit:prefetch href="/NFTs">NFTs</a>
			</li>
						<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">White Paper</a>
			</li>
									<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Gameplay Paper</a>
			</li>

<li>
  <div class="progress" id="progress"></div>
  <audio id="audio" src="https://www.freesound.org/data/previews/338/338825_1648170-lq.mp3" loop></audio>
  <button class="togglePlay" on:click="{togglePlay}">
</button>
</li>

									<li class="getupdates" class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Get updates</a>
			</li>



		</ul>
	</nav>
		<div class="trailer-container"><div class="audio-container play">
  <span class="bar bar_one"></span>
  <span class="bar bar_two"></span>
  <span class="bar bar_three"></span>
  <span class="bar bar_four"></span>
  </div><span class="text-ama">AMA coming soon</span></div>
</header>

<style>
	header {
		display: flex;
		justify-content: flex-start;
		position:fixed;
		top:20px;
		padding-left:30px;
		padding-right:30px;
		z-index:99;
		width:100%;
	
	}

	.logo {
		width: 180px;
		margin-right:50px;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.logo img {
		width: 100%;
		object-fit: contain;
	}

	nav {
		display: flex;
		width:100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		list-style: none;
		width:100%;
	}

	li {
		position: relative;
		height: 100%;
		margin-left:50px;
		display:flex;
		justify-content:center;
		align-items:center;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	li:hover::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: normal;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		
	}

	a:hover {
		color: var(--pure-white);
	}

	.getupdates
	{
display:inline-block;
margin-left:auto;
align-self:flex-end;
	}
		.getupdates a
	{
		
		background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(19px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 48px;
padding:22px 38px;
	}



	/* audio player ------ starts */


.progress {
  width: 1px;
  height: 3px;
  background: #fff;
  transition: width 0.1s linear;
  position:fixed;
  bottom:0px;
  left:0px;
}

.togglePlay {
  
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
  cursor: pointer;
  transition: transform 150ms ease-out;
}
.togglePlay {
	background:transparent;
background-image: url( "../../assets/mutesound.png" );
background-size:contain;
width:30px;
height:30px
}
:global(.togglePlay.active) {
background-image: url( "../../assets/playsound.png" ) !important;
background-size:contain;
}

	/* audio player ------ ends */


	/* AMA TRAILER ------ starts */

.trailer-container
{
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  bottom:40px;
  right:60px;
}

.trailer-container .text-ama
{
color:#fff;
font-size:12px;
position:relative;
top:2px;
}

.audio-container{
  width: 46px;
  height: 40px;
  overflow: hidden;
  position: relative;
  margin-left: 20px;
  transform:scale(0.5)
}

.bar{
  width: 8px;
  height: 40px;
  background: rgb(255, 255, 255);
  position: absolute;
  left: 0;
  transition: all .3s ease;
}

.audio-container.play .bar{
  animation: upDown 2.5s linear infinite;
}

@keyframes upDown{
  0%{
    transform:translateY(0px);
  }
  10%{
    transform:translateY(15px);
  }
  20%{
    transform:translateY(0px);
  }
  30%{
    transform:translateY(10px);
  }
  40%{
    transform:translateY(20px);
  }
  50%{
    transform:translateY(15px);
  }
  60%{
    transform:translateY(30px);
  }
  70%{
    transform:translateY(20px);
  }
  80%{
    transform:translateY(15px);
  }
  90%{
    transform:translateY(20px);
  }
  100%{
    transform:translateY(0px);
  }
}

.bar_two{
  left: 12px;
}

.audio-container.play .bar_two{
  animation-delay: .6s;
}

.bar_three{
  left: 24px;
}

.audio-container.play .bar_three{
  animation-delay: .3s;
}

.bar_four{
  left: 36px;
}

.audio-container.play .bar_four{
  animation-delay: .9s;
}


/* AMA TRAILER ------ ends */

</style>
