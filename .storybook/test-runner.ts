import type { TestRunnerConfig } from '@storybook/test-runner';
import { checkA11y, injectAxe } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
	preVisit: async page => {
		await injectAxe(page);
	},
	postVisit: async page => {
		await checkA11y(page, `#storybook-root`, {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});

		const elementHandler = await page.$('#storybook-root');
		const innerHTML = await elementHandler?.innerHTML();
		expect(innerHTML).toMatchSnapshot();
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
