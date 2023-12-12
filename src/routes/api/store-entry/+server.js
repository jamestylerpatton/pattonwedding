import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const reqData = await request.json();
	const { entryData } = reqData;

	const { data, error } = await supabase
		.from('all_entries')
		.insert({
			email: entryData.email,
			first_name: entryData.first_name,
			last_name: entryData.last_name,
			status: entryData.status,
			notes: entryData.notes
		})
		.select();

	return json({ data, error });
}
