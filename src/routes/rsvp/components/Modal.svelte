<script>
	export let modalData; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && modalData.show) dialog.showModal();
	$: buttonClass = modalData.status === 'success' ? 'text-successGreen' : 'text-errorRed';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (modalData.show = false)}
	on:click|self={() => dialog.close()}
	class="max-w-lg rounded-lg border-0 p-0"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="p-8 text-center">
		<h2 class="mb-8 text-2xl {buttonClass}">{modalData.header}</h2>

		{#if modalData.status === 'success'}
			<svg
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mb-8 inline-block"
			>
				<circle cx="40" cy="40" r="40" fill="#EBF8F1" />
				<path
					d="M40 60C51 60 60 51 60 40C60 29 51 20 40 20C29 20 20 29 20 40C20 51 29 60 40 60Z"
					stroke="#05A660"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M31.5 40L37.16 45.66L48.5 34.34"
					stroke="#05A660"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}

		{#if modalData.status === 'error'}
			<svg
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mb-8 inline-block"
			>
				<circle cx="40" cy="40" r="40" fill="#FFEBEB" />
				<path
					d="M40 60C51 60 60 51 60 40C60 29 51 20 40 20C29 20 20 29 20 40C20 51 29 60 40 60Z"
					stroke="#E53535"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M40 32V42"
					stroke="#E53535"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M39.9893 48H40.0072"
					stroke="#E53535"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}

		<div class="mb-8">
			{@html modalData.message}
		</div>

		<!-- svelte-ignore a11y-autofocus -->
		<button
			autofocus
			on:click={() => dialog.close()}
			class="block w-full py-5 px-3 rounded-full bg-brown text-white hover:bg-darkbrown transition-all"
		>
			{modalData.button}
		</button>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
