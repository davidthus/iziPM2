import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const session = locals.auth.validate();
	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const { username, email, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;
		try {
			await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					username,
					email
				}
			});
		} catch (err) {
			console.error(err);
			return fail(400, { message: 'Could not register user.' });
		}
		throw redirect(302, '/login');
	}
};
