import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const build_version = process.env.BUILD_VERSION || 'dev'

// https://astro.build/config
export default defineConfig({
	site: 'https://jhreyess.github.io',
	base: `/GHActionsTest/${build_version}`,
	build: {
		assets: 'assets',
	},
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
