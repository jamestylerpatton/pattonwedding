<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let header = null;

	const handleAnchorClick = (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;
		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		});
	};

	onMount(async () => {
		function handleScroll() {
			if (window.pageYOffset > 20) {
				header.classList.add('py-3');
				header.classList.remove('py-10');
				header.classList.add('-translate-y-1/2');
				header.classList.add('opacity-0');
				header.classList.add('pointer-events-none');
			} else {
				header.classList.remove('py-3');
				header.classList.add('py-10');
				header.classList.remove('-translate-y-1/2');
				header.classList.remove('opacity-0');
				header.classList.remove('pointer-events-none');
			}
		}

		window.addEventListener('scroll', handleScroll);
	});
</script>

<header
	bind:this={header}
	class="fixed z-10 top-0 left-0 w-full flex justify-between items-center px-5 md:px-20 py-10 transition-all duration-300 ease-in-out bg-background bg-opacity-50"
>
	<a href="/" class="block mr-6 lg:mr-12 py-6 text-sm lg:text-base opacity-30">#pattonpending</a>
	{#if $page.url.pathname === '/'}
		<nav class="flex items-center">
			<a
				href="#schedule"
				class="hidden md:block mr-6 lg:mr-12 py-5 text-sm uppercase lg:text-base"
				on:click={handleAnchorClick}>Schedule</a
			>
			<a
				href="#accommodations"
				class="hidden md:block mr-6 lg:mr-12 py-5 text-sm uppercase lg:text-base"
				on:click={handleAnchorClick}
			>
				Hotel
			</a>
			<a
				href="#faq"
				class="hidden md:block mr-6 lg:mr-12 py-5 text-sm uppercase lg:text-base"
				on:click={handleAnchorClick}>Faq</a
			>
			<!-- <a href="/" class="hidden md:block mr-6 lg:mr-12 py-5 text-sm lg:text-base">Registry</a> -->
			<a
				href="/rsvp"
				class="block uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-5 lg:px-10 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all"
			>
				RSVP
			</a>
		</nav>
	{/if}
</header>
