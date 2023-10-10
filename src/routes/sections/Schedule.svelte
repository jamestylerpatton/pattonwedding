<script>
	import { reveal } from 'svelte-reveal';
</script>

<div id="schedule" class="w-full min-h-screen px-10 py-20 lg:py-40 bg-background">
	<div class="w-full max-w-[1440px] mx-auto">
		<h3 class="text-8xl font-script mb-20 text-center">Schedule</h3>
		<div id="schedule-timeline" class="text-black">
			<div class="left-content">
				<div class="left-content__column">
					<div class="w-5/6" use:reveal={{ delay: 0 }}>
						<h4 class="text-4xl font-serif mb-4">Ceremony</h4>
						<p class="text-base font-sans mb-4">5:00PM</p>
						<p class="text-sm font-sans mb-4">
							The ceremony will begin at 5 sharp, so we recommend arriving a bit earlier and having
							a look around the venue before taking a seat
						</p>
					</div>
				</div>
			</div>
			<div class="right-content">
				<div class="right-content__column">
					<div class="w-5/6" use:reveal={{ delay: 100 }}>
						<h4 class="text-4xl font-serif mb-4">Cocktail Hour</h4>
						<p class="text-base font-sans mb-4">5:30PM</p>
						<p class="text-sm font-sans mb-4">
							Indulge in either an old fashioned or a paloma and enjoy the acoustic entertainment
							and passed appetizers while we get our photos taken
						</p>
					</div>
				</div>
			</div>
			<div class="left-content">
				<div class="left-content__column">
					<div class="w-5/6" use:reveal={{ delay: 200 }}>
						<h4 class="text-4xl font-serif mb-4">Reception</h4>
						<p class="text-base font-sans mb-4">6:30PM</p>
						<p class="text-sm font-sans mb-4">
							Feast on our traditional LA tacos whilst we soak in the excitement of becoming newly
							weds. Afterwards we'll hit the dance floor
						</p>
					</div>
				</div>
			</div>
			<div class="right-content">
				<div class="right-content__column">
					<div class="w-5/6" use:reveal={{ delay: 300 }}>
						<h4 class="text-4xl font-serif mb-4">Conclusion</h4>
						<p class="text-base font-sans mb-4">11:00PM</p>
					</div>
				</div>
			</div>
			<div class="knot relative">
				<svg
					class="absolute top-0 left-0 lg:left-1/2 translate-x-[-38px]"
					width="76"
					height="64"
					viewBox="0 0 76 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M38 0C38 6 38.5633 19.2 44.5633 26C52.0633 34.5 59.6138 38.3274 63.0632 44.5C72.5632 61.5 50.2608 72.9631 48.5632 47.5C47.0632 25 41.5633 23 22.0633 7C11.0945 -2 0.0632373 7 1.06323 15C2.31898 25.046 13.5632 19.2527 24.5632 17C39.2123 14 47.5632 17 43.0632 20C38.5632 22.1666 33.1632 25.2 35.5632 22C38.5632 18 47.5632 17 45.5632 19.5C42.1332 23.7875 35.5632 30.5 38.5632 25C41.5632 19.5 49.5632 19 47.0632 22.5C44.5632 26 37.5632 29.5 40.0632 27C42.5632 24.5 48.3462 23.5 53.0632 23.5C61.0632 23.5 66.5 26 75 32.5"
						stroke="#322A27"
						stroke-width="2"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.left-content,
	.right-content {
		@apply flex relative pb-20;
	}

	.left-content__column,
	.right-content__column {
		@apply w-full pl-6;
	}

	.left-content::before,
	.right-content::before {
		@apply content-[""] absolute top-[10px] left-0 w-[2px] bottom-0 bg-black -translate-x-1/2;
	}
	.left-content::after,
	.right-content::after {
		@apply content-[""] absolute top-0 left-0 w-[10px] h-[10px] border-2 border-solid border-black rounded-full bg-background -translate-x-1/2;
	}

	@media screen(lg) {
		.left-content {
			@apply justify-start text-right;
		}
		.left-content__column {
			@apply w-1/2 flex justify-end pr-6 pl-0;
		}
		.right-content {
			@apply justify-end;
		}
		.right-content__column {
			@apply w-1/2 flex justify-start;
		}
		.left-content::before,
		.right-content::before {
			@apply left-1/2;
		}
		.left-content::after,
		.right-content::after {
			@apply left-1/2;
		}
	}
</style>
