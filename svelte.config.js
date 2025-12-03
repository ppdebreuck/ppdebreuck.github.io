import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',

			fallback: '404.html',

			precompress: false,
			strict: true
		}),

		paths: {
			base: ''
		},

		trailingSlash: 'always',

		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
