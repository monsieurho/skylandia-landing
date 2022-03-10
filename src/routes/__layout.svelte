<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import FooterMain from '$lib/FooterMain.svelte';
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
<FooterMain />
	<Footer />
	

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









	

</style>
