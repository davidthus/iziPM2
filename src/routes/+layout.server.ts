import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	const { user, session } = locals.auth.validateUser();
	return { user };
};
