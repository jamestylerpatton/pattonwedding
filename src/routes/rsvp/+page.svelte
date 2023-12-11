<script>
	import { supabase } from '$lib/supabaseClient';
	import Modal from './components/Modal.svelte';

	let modalData = {
		show: false,
		status: null, // error|success
		header: null,
		message: null,
		button: null
	};

	async function findUser(entries) {
		return await fetch('/api/fetch-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ entries })
		}).then((res) => res.json());

		// const { data, error } = await supabase
		// 	.from('rsvp_list')
		// 	.select()
		// 	.ilike('first_name', `%${entries.first_name?.toLowerCase()}%`)
		// 	.ilike('last_name', `%${entries.last_name?.toLowerCase()}%`);
		// return { data, error };
	}

	async function updateTable(entryData, tableData) {
		return await fetch('/api/update-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ entryData, tableData })
		}).then((res) => res.json());

		// const { data, error } = await supabase
		// 	.from('rsvp_list')
		// 	.update({
		// 		email: entryData.email,
		// 		status: entryData.status,
		// 		notes: entryData.notes
		// 	})
		// 	.eq('id', tableData.id);
		// return { data, error };
	}

	function validateForm(entries) {
		if (!entries.first_name || !entries.last_name) {
			modalData = {
				show: true,
				status: 'error', // error|success
				header: 'Whoops!',
				message:
					'<p>Please input both your first name and last name as it appears on your invitation</p>',
				button: 'Okay'
			};
			return false;
		}

		if (!entries.status) {
			modalData = {
				show: true,
				status: 'error', // error|success
				header: 'Whoops!',
				message: '<p>Please check if you will be attending</p>',
				button: 'Okay'
			};
			return false;
		}

		return true;
	}

	async function handleSubmit(event) {
		const formData = new FormData(this);
		const entries = Object.fromEntries(formData);

		// eslint-disable-next-line no-console
		console.log('entries', entries);

		const validate = validateForm(entries);
		if (!validate) return;

		const { data: findData, error: findError } = await findUser(entries);

		// eslint-disable-next-line no-console
		console.log('findData', findData);

		// return;

		if (findError) {
			modalData = {
				show: true,
				status: 'error', // error|success
				header: 'Whoops!',
				message: findError.message,
				button: 'Got it!'
			};
			console.error(findError.message);
			return;
		}

		if (!findData.length) {
			modalData = {
				show: true,
				status: 'error', // error|success
				header: 'Whoops!',
				message: `<p>This name is not on our list. Please be sure to enter your name as it appears on your RSVP, or call us at <span class="whitespace-nowrap">(626) 733-6030</span> and we can take care of it for you :)</p>`,
				button: 'Okay'
			};
			return;
		}

		const { data: updateData, error: updateError } = await updateTable(entries, findData[0]);

		// eslint-disable-next-line no-console
		console.log('updateData', updateData);

		if (updateError) {
			modalData = {
				show: true,
				status: 'error', // error|success
				header: 'Whoops!',
				message: updateError.message,
				button: 'Got it!'
			};
			console.error(updateError.message);
			return;
		}

		/**
		 * Handle success
		 */
		let successHeader = 'You’re In!';
		let successMessage = `<p>Can’t wait to see you there!</p><p>If there are other guests on your invitation, close this popup and re-submit with their information.</p>`;

		if (entries.status === 'false') {
			successHeader = 'Sorry you can’t make it!';
			successMessage = `<p>We’ll miss you!</p><p>If there are other guests on your invitation, close this popup and re-submit with their information.</p>`;
		}

		modalData = {
			show: true,
			status: 'success', // error|success
			header: successHeader,
			message: successMessage,
			button: 'Got it!'
		};

		// reset form
		this.reset();
	}
</script>

<svelte:head>
	<title>Rebekah & Tyler Wedding | RSVP</title>
	<meta name="description" content="Rebekah & Tyler Wedding Website - RSVP Here" />
</svelte:head>

<div
	class="w-full min-h-screen flex flex-col justify-center items-center relative px-10 bg-background py-40"
>
	<div class="w-full max-w-3xl">
		<h1 class="text-6xl lg:text-8xl leading-none font-serif uppercase mb-10 text-center">RSVP</h1>
		<!-- <a href="/about">About my site</a> -->
		<form method="POST" class="w-full text-black" on:submit|preventDefault={handleSubmit}>
			<div class="md:flex mb-4">
				<div class="w-full md:mr-4 mb-4 md:mb-0">
					<label for="first_name" class="block text-xs uppercase mb-2">First Name</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						class="font-control p-4 w-full block rounded border bg-white"
					/>
				</div>
				<div class="w-full">
					<label for="last_name" class="block text-xs uppercase mb-2">Last Name</label>
					<input
						type="text"
						name="last_name"
						id="last_name"
						class="font-control p-4 w-full block rounded border bg-white"
					/>
				</div>
			</div>
			<div class="mb-6">
				<label for="email" class="block text-xs uppercase mb-2">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					class="font-control p-4 w-full block rounded border bg-white"
				/>
			</div>
			<div class="mb-6">
				<label for="status_true" class="block uppercase mb-2">
					<input type="radio" id="status_true" name="status" value="true" class="mr-2" />
					<span>I WILL be attending</span>
				</label>
				<label for="status_false" class="block uppercase mb-2">
					<input type="radio" id="status_false" name="status" value="false" class="mr-2" />
					<span>I can’t make it</span>
				</label>
			</div>
			<div class="mb-8">
				<label for="notes" class="block text-xs uppercase mb-2">Notes?</label>
				<textarea
					name="notes"
					id="notes"
					rows="5"
					class="font-control p-4 w-full block rounded border bg-white"
				/>
			</div>
			<input
				type="submit"
				value="Submit"
				class="block uppercase bg-transparent focus:shadow-outline focus:outline-none text-text border-2 border-text py-5 px-5 lg:px-10 rounded cursor-pointer text-sm lg:text-base hover:bg-text hover:text-background transition-all ml-auto"
			/>
		</form>
	</div>
</div>

<Modal bind:modalData />

<!-- VL7nZdARz0H5y1ue3x14 -->

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
		color: theme(colors.text);
		/* @apply scroll-smooth; */
	}
	:global(body) {
		font-family: theme(fontFamily.body);
	}
</style>
