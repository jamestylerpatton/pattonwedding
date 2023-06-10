<script>
	import { onMount } from 'svelte';

	export let header = null;

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
	<span class="block mr-6 lg:mr-12 py-5 text-sm lg:text-base opacity-30 cursor-default"
		>#pattonpending</span
	>
	<nav class="flex items-center">
		<a href="#accommodations" class="hidden md:block mr-6 lg:mr-12 py-5 text-sm lg:text-base">
			Hotel
		</a>
		<a href="#schedule" class="hidden md:block mr-6 lg:mr-12 py-5 text-sm lg:text-base">Schedule</a>
		<!-- <a href="/" class="hidden md:block mr-6 lg:mr-12 py-5 text-sm lg:text-base">Registry</a> -->
		<!-- <a href="/" class="hidden md:block mr-6 lg:mr-12 py-5 text-sm lg:text-base">FAQ</a> -->
		<a
			href="https://www.theknot.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="block uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-5 lg:px-10 rounded cursor-pointer text-sm lg:text-base"
		>
			RSVP
		</a>
	</nav>
</header>
