/** @type {import('@sveltejs/kit').Config} */
import {mdsvex} from 'mdsvex';

const config = {
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsvex({
			extensions: [".md"],
			remarkPlugins: []
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
