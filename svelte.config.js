import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
