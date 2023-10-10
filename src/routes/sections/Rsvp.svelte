<script>
	const blowConfetti = (elem) => {
		if (typeof window.party === 'undefined') {
			return;
		}
		window.party.confetti(elem);
	};

	const navigateToRsvp = (e) => {
		e.preventDefault();

		blowConfetti(e.target);

		setTimeout(() => {
			window.location.href = '/rsvp';
		}, 1000);
	};
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>
</svelte:head>

<div
	id="rsvp"
	class="w-full min-h-[50vh] flex flex-col justify-center items-center text-center relative px-10 py-20 bg-background"
>
	<h3
		class="text-4xl md:text-5xl font-serif leading-normal md:leading-normal mb-10 max-w-[560px] md:max-w-[700px]"
	>
		We hope you’ll join us on this special day
	</h3>
	<a
		on:click={navigateToRsvp}
		href="/rsvp"
		class="inline-block uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-10 lg:px-20 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all"
	>
		RSVP
	</a>
	<p class="mt-10 text-xs italic">Please submit RSVP before Jan 15th, 2024</p>
</div>
