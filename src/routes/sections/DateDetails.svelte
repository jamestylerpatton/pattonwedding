<script>
	import Marquee from 'svelte-fast-marquee';
	let play = true;
</script>

<div
	id="details"
	class="w-full flex flex-col md:flex-row justify-evenly md:items-center relative py-10 bg-[#f3eae2] text-brown text-xl lg:text-3xl"
>
	<Marquee pauseOnHover={true} speed={30} {play}>
		<span class="py-2">
			800 E 4th Pl, Los Angeles, CA 90013
			<span class="mx-6">&middot;</span>
			March 1, 2024 at 5:00pm
			<span class="mx-6">&middot;</span>
			800 E 4th Pl, Los Angeles, CA 90013
			<span class="mx-6">&middot;</span>
			March 1, 2024 at 5:00pm
			<span class="mx-6">&middot;</span>
		</span>
	</Marquee>
</div>
