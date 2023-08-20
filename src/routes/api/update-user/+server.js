import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const reqData = await request.json();
	const { tableData, entryData } = reqData;

	const { data, error } = await supabase
		.from('rsvp_list')
		.update({
			email: entryData.email,
			status: entryData.status,
			notes: entryData.notes
		})
		.eq('id', tableData.id);

	return json({ data, error });
}
