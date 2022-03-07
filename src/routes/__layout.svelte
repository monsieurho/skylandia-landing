<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import PageTransition from "$lib/PageTransition.svelte";
  export let url;
import { onMount } from 'svelte';







</script>

<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } });
</script>

<Header />
<main>
	<PageTransition {url}>
	<slot />
	</PageTransition>
</main>

<footer>
	<Footer />
	Copyright © 2022
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0px;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		background-color:#111;
		color:#fff;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}



</style>
