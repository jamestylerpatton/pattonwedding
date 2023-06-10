<script>
	import Header from './Header.svelte';

	import '../app.css';
</script>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<div class="px-20 py-10 text-right">#pattonpending</div>
</div>
