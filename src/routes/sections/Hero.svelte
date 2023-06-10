<script>
	let days = 0;
	const targetDate = new Date('March 1, 2024 00:00:00').getTime();
	const now = new Date().getTime();
	const distance = targetDate - now;
	days = Math.floor(distance / (1000 * 60 * 60 * 24));
</script>

<div
	id="hero"
	class="w-full min-h-screen flex flex-col justify-center items-center relative px-10 bg-background"
>
	<div>
		<p class="text-2xl text-end font-serif mb-4 opacity-70">
			{days} days until
		</p>
		<h1 class="text-[15vw] md:text-[10vw] xl:text-[130px] leading-none font-serif uppercase">
			Rebekah <br /> & Tyler
		</h1>
		<p class="text-[12vw] md:text-[6vw] xl:text-[80px] font-script opacity-70">tie the knot</p>
	</div>

	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
		<p class="text-xl lg:text-3xl font-serif mb-2 text-black">@ Millwick, DTLA</p>
	</div>
</div>
