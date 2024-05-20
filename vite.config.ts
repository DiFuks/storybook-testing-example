/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: `jsdom`,
		setupFiles: [`./src/shared/config/vitestSetup.ts`],
	},
});
