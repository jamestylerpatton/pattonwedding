import { Resend } from 'resend';
import { env } from '$env/dynamic/public';

export const resend = new Resend(env.PUBLIC_RESEND_API_KEY);
