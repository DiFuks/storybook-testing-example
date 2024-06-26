import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, `package.json`)));

const config: StorybookConfig = {
	stories: [`../src/shared/ui/**/*.mdx`, `../src/shared/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
	addons: [
		getAbsolutePath(`@storybook/addon-onboarding`),
		getAbsolutePath(`@storybook/addon-links`),
		getAbsolutePath(`@storybook/addon-essentials`),
		getAbsolutePath(`@chromatic-com/storybook`),
		getAbsolutePath(`@storybook/addon-interactions`),
		getAbsolutePath(`@chromatic-com/storybook`),
		getAbsolutePath(`@storybook/addon-a11y`),
		getAbsolutePath(`@storybook/addon-coverage`),
	],
	typescript: {
		check: false,
		reactDocgen: `react-docgen-typescript`,
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			shouldRemoveUndefinedFromOptional: true,
		},
	},
	framework: {
		name: getAbsolutePath(`@storybook/react-vite`) as `@storybook/react-vite`,
		options: {},
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
