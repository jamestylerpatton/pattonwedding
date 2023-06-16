<script>
	import { reveal } from 'svelte-reveal';

	import FaqItem from './components/FaqItem.svelte';
	import photo1 from '$lib/images/photo1.png';
	import photo2 from '$lib/images/photo2.png';
	import photo3 from '$lib/images/photo3.png';

	const faqItems = [
		{
			question: 'What is the dress code for the wedding?',
			answer:
				'The dress code for our wedding is semi-formal. We encourage guests to dress in cocktail attire. No jeans or shorts please! Also, prepare for average temperatures in the upper 60s to low 50s.'
		},
		{
			question: 'Can I bring a plus one?',
			answer:
				'We kindly request that you refer to your invitation to see if a plus one is extended to you. If no mention of a plus one is indicated, we apologize for any inconvenience.'
		},
		{
			question: 'Will there be vegetarian/vegan meal options?',
			answer:
				'For guests who prefer vegetarian meals, we have made sure to include some delicious options on our menu. We will be serving quesadillas and potato tacos, both of which are sure to satisfy your taste buds. If you have any other dietary restrictions or allergies, please let us know in advance so we can make accommodations for you.'
		},
		{
			question: 'What time does the wedding ceremony start?',
			answer:
				'The wedding ceremony will begin promptly at 5:00pm. We encourage guests to arrive at least 30 minutes prior to the start time.'
		},
		{
			question: 'Can I take photos during the ceremony?',
			answer:
				'To ensure that everyone can enjoy the moment fully, we kindly request that you refrain from taking photos or using your mobile devices during the ceremony. We have hired professional photographers who will capture the beautiful moments for us to share. During the reception, you are welcome and encouraged to take photos! Feel free to use our wedding hashtag, #pattonpending, so we can see all the fun!'
		},
		{
			question: 'Is there a gift registry?',
			answer:
				'We appreciate your presence at our wedding, and your well wishes are the greatest gift we could ask for. However, if you would like to give a gift, we have created a registry on Crate & Barrel to help guide you.'
		},
		{
			question: 'Will there be parking available at the venue?',
			answer: 'We will be providing a valet at the venue for your convenience.'
		},
		{
			question: 'Can I leave my car overnight?',
			answer:
				'Unfortunately, we cannot accommodate any overnight parking at the venue. We recommend that guests arrange for a designated driver or ride-sharing service if they plan on drinking at the wedding.'
		},
		{
			question: 'How do I RSVP? What happens if I do not RSVP in time?',
			answer:
				'To RSVP, click the RSVP tab and type the name(s) listed on your envelope. Kindly RSVP before Friday, January 12th, 2024. If you are unable to attend, please let us know as soon as possible. If we do not receive an RSVP by the provided deadline, it will be marked as a "No." We will miss celebrating with you, but we need to provide a total guest count to the venue and vendors shortly after the deadline. Late RSVPs cannot be accepted due to this constraint. We hope you understand!'
		},
		{
			question: 'Are kids welcome?',
			answer:
				'While we love all your children this will be an adult only event. The only exception will be the children apart of our wedding party! Please refer to the ‘RSVP’ tab to see if we are able to accommodate your children. We hope that you will see this as an opportunity to let down your hair down and enjoy the party with us!'
		},
		{
			question: 'Will the ceremony and reception be indoors or outdoors?',
			answer:
				'The ceremony will be held outdoors and the receptions will be held indoors with large doors open to the courtyard. Outdoor space heaters will be provided.'
		},
		{
			question: 'How does seating work?',
			answer:
				'The ceremony will have open seating, so you can sit wherever you please. However, for the reception, we will carefully arrange tables so that guests are seated with those they know or their plus ones.'
		},
		{
			question: 'What do I do if I am late to the ceremony?',
			answer:
				'The ceremony will be starting promptly at 5:30 p.m. We recommend guests arrive around 5:00 p.m. so there is time to mingle, grab a drink, and find a seat. If you happen to be late, our coordinator will let you know if they are still allowing guests in or if you will need to wait until the ceremony is over. If that happens, you will still be able to attend the reception so hang tight and we will see you at the reception! Thank you for understanding!'
		}
	];
</script>

<div
	id="faq"
	class="w-full max-w-[1400px] mx-auto flex justify-center relative px-10 py-20 lg:py-40 bg-white"
>
	<div class="hidden md:flex w-1/3 justify-center">
		<div use:reveal={{ y: 20 }} class="p-0 rounded shadow-lg -mt-24 lg:-mt-48 self-start">
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
