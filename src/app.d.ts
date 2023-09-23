import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	let __prisma: PrismaClient;

	/// <reference types="lucia" />
	declare namespace Lucia {
		type Auth = import('./lucia.js').Auth;
		type DatabaseUserAttributes = {
			username: string;
			email: string;
			password: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

export {};
