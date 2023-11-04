<script>
	import { slide } from 'svelte/transition';
	export let item, index;
	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<!-- What is term -->
<div class={index !== 0 ? 'border-t' : ''}>
	<!-- header -->
	<div
		on:click={toggle}
		on:keypress={toggle}
		class="cursor-pointer flex justify-between items-center space-x-5 px-5 py-5 min-h-16 transition hover:bg-beige"
	>
		<!-- <i class="fas fa-plus" /> -->
		<h3 class="text-base">{item.question}</h3>

		<svg
			class="transition-all shrink-0 {isOpen ? '-rotate-45' : ''}"
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.54339 7.5647H6.13881V12.1601C6.13881 12.6272 6.52302 13.0189 6.99763 13.0189C7.47224 13.0189 7.85644 12.6272 7.85644 12.1601V7.5647H12.4519C12.9189 7.5647 13.3107 7.18049 13.3107 6.70588C13.3107 6.23127 12.9189 5.84706 12.4519 5.84706H7.85644V1.25164C7.85644 0.784563 7.47224 0.392822 6.99763 0.392822C6.52302 0.392822 6.13881 0.784563 6.13881 1.25164V5.84706H1.54339C1.07631 5.84706 0.68457 6.23127 0.68457 6.70588C0.68457 7.18049 1.07631 7.5647 1.54339 7.5647Z"
				fill="#D9D9D9"
			/>
		</svg>
	</div>
	<!-- Content -->
	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="p-5">
			<p class="leading-6 font-light text-left text-sm">
				{@html item.answer}
			</p>
		</div>
	{/if}
</div>
