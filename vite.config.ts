/// <reference types="vitest" />
import { createRequire } from 'module';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export const require = createRequire(import.meta.url);

export default defineConfig({
	plugins: [
		react({
			plugins: [
				[
					require.resolve(`@swc/plugin-styled-components`),
					{
						ssr: true,
						displayName: true,
					},
				],
			],
		}),
	],
	test: {
		globals: true,
		environment: `jsdom`,
		setupFiles: [`./src/shared/config/vitestSetup.ts`],
	},
});
