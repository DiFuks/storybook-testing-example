import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Button.stories';

const components = composeStories(stories);

const { Primary } = components;

describe(`Button`, () => {
	it(`should render Primary correctly`, () => {
		render(<Primary />);

		const buttonElement = screen.getByRole(`button`);

		expect(buttonElement.textContent).toEqual(Primary.args.children);
		expect(buttonElement).toMatchSnapshot();
	});

	it.each(Object.entries(components))(`should render %s correctly`, (name, Component) => {
		render(<Component />);

		const buttonElement = screen.getByRole(`button`);

		expect(buttonElement.textContent).toEqual(Component.args.children);
	});
});
