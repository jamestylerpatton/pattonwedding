import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

export const supabase = createClient(
	'https://rojnynxzwvpvgqqwrvyp.supabase.co',
	env.PUBLIC_SB_ANON_KEY
);
