import type { Preview } from '@storybook/react';

const preview: Preview = {
	tags: [`autodocs`],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /date$/i,
			},
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default preview;
