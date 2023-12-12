import { supabase } from '$lib/supabaseClient';
import { resend } from '$lib/resendClient';
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
		.eq('id', tableData.id)
		.select();

	if (!error) {
		const subject = `RSVP updated for ${entryData.first_name} ${entryData.last_name}!`;
		const body = `
			<p>First Name: ${entryData.first_name}</p>
			<p>Last Name: ${entryData.last_name}</p>
			<p>Email: ${entryData.email}</p>
			<p>Attending: ${entryData.status}</p>
			<p>Notes: ${entryData.notes}</p>`;

		try {
			const data = await resend({
				from: 'PattonWedding <info@updates.pattonwedding.com>',
				to: ['jamestylerpatton@gmail.com', 'rebguerra93@gmail.com'],
				subject: subject,
				html: body
			});

			console.log(data);
		} catch (error) {
			// return { error };
			console.error(error);
		}
	}

	return json({ data, error });
}
