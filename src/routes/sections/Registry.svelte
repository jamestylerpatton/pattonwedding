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
			window.open(e.target.href, '_blank').focus();
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
		Wedding Registry
	</h3>
	<p class="mb-10 text-sm max-w-[840px] px-10 w-full leading-normal">
		Your well wishes are the greatest gift we could ask for. However, a cash gift would be very
		welcome! If you prefer to give a physical gift, we have a registry set up at the following
		links:
	</p>
	<a
		on:click={navigateToRsvp}
		href="https://www.potterybarn.com/registry/mksskl92cj/registry-list.html"
		class="inline-block mb-4 uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-10 lg:px-20 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all"
	>
		Pottery Barn
	</a>
	<a
		on:click={navigateToRsvp}
		href="https://www.target.com/gift-registry/gift/pattonweddingdtla"
		class="inline-block mb-4 uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-10 lg:px-20 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all"
	>
		Target
	</a>
	<a
		on:click={navigateToRsvp}
		href="https://www.amazon.com/wedding/registry/2LIO9KYP843MX"
		class="inline-block uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-10 lg:px-20 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all"
	>
		Amazon
	</a>
</div>
