import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const reqData = await request.json();
	const { entries } = reqData;

	const { data, error } = await supabase
		.from('rsvp_list')
		.select()
		.ilike('first_name', `${entries.first_name?.toLowerCase()}`)
		.ilike('last_name', `${entries.last_name?.toLowerCase()}`);

	return json({ data, error });
}
