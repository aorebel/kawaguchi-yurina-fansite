import node from  "@sveltejs/adapter-node";
import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		adapter: node({ env: { port: process.env.PORT } }),
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
				external: ['whatwg-url']
			  }
		   },
		
	},
	webPreferences: {
		nodeIntegration: true,
	},
};

export default config;
