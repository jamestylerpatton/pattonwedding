<script>
	import FaqItem from './components/FaqItem.svelte';
	import photo1 from '$lib/images/photo1.png';
	import photo2 from '$lib/images/photo2.png';
	import photo3 from '$lib/images/photo3.png';

	const faqItems = [
		{
			question: 'What is the dress code for the wedding?',
			answer:
				'The dress code for our wedding is semi-formal. We encourage guests to dress in cocktail attire.'
		},
		{
			question: 'Can I bring a plus one?',
			answer:
				'We kindly request that you refer to your invitation to see if a plus one is extended to you. If no mention of a plus one is indicated, we apologize for any inconvenience.'
		},
		{
			question: 'Will there be vegetarian/vegan meal options?',
			answer: 'No, you made your bed, now sleep in it.'
		},
		{
			question: 'What time does the wedding ceremony start?',
			answer:
				'The wedding ceremony will begin promptly at 5:00pm. We encourage guests to arrive at least 30 minutes prior to the start time.'
		},
		{
			question: 'Can I take photos during the ceremony?',
			answer:
				'To ensure that everyone can enjoy the moment fully, we kindly request that you refrain from taking photos or using your mobile devices during the ceremony. We have hired professional photographers who will capture the beautiful moments for us to share.'
		},
		{
			question: 'Is there a gift registry?',
			answer:
				'We appreciate your presence at our wedding, and your well wishes are the greatest gift we could ask for. However, if you would like to give a gift, we have created a registry on Crate & Barrel to help guide you'
		},
		{
			question: 'Will there be parking available at the venue?',
			answer: 'We will be providing a valet at the venue for your convenience.'
		}
	];
</script>

<div id="faq" class="w-full flex justify-center relative px-10 py-20 lg:py-40 bg-white">
	<div class="hidden md:flex w-1/3 justify-center">
		<div class="p-0 rounded shadow-lg -mt-32 lg:-mt-48">
			<img class="mb-2" src={photo1} alt="" />
			<img class="mb-2" src={photo2} alt="" />
			<img class="mb-2" src={photo3} alt="" />
		</div>
	</div>
	<div class="md:w-2/3 text-black pl-10">
		<h3 class="text-5xl lg:text-8xl font-serif mb-10">FAQ</h3>

		<div>
			{#each faqItems as item, index}
				<FaqItem {item} {index} />
			{/each}
		</div>
	</div>
</div>
