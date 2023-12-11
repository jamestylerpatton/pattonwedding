import { env } from '$env/dynamic/public';

export const resend = async (payload) => {
	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${env.PUBLIC_RESEND_API_KEY}`
		},
		body: JSON.stringify(payload)
	});

	return await res.json();
};
