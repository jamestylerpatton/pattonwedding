<script>
	import Hero from './sections/Hero.svelte';
	// import Details from './sections/Details.svelte';
	import DateDetails from './sections/DateDetails.svelte';
	import ParallaxPhoto from './sections/ParallaxPhoto.svelte';
	import Accomodations from './sections/Accomodations.svelte';
	import Schedule from './sections/Schedule.svelte';
	import Faq from './sections/Faq.svelte';
	import Rsvp from './sections/Rsvp.svelte';
</script>

<svelte:head>
	<title>Rebekah & Tyler Wedding</title>
	<meta name="description" content="Rebekah & Tyler Wedding Website - RSVP Here" />
</svelte:head>

<Hero />
<ParallaxPhoto />
<!-- <Details /> -->
<DateDetails />
<Schedule />
<!-- <Accomodations /> -->
<Faq />
<Rsvp />

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
