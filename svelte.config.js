import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: 'preview',
				persist: true
			}
		}),
		alias: {
			$components: 'src/components'
		}
	}
};

export default config;
