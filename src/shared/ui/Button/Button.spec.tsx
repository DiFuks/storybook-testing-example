import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Button } from './Button';
import * as stories from './Button.stories';
import { ButtonWithHooks } from './ButtonWithHooks';

const components = composeStories(stories);

const { Primary } = components;

describe(`Button`, () => {
	it(`should  render a button with the text "Click me!"`, async () => {
		const onClick = vi.fn();
		render(<ButtonWithHooks onClick={onClick}>Primary</ButtonWithHooks>);
		const buttonElement = screen.getByRole(`button`);

		expect(buttonElement).toHaveTextContent(/Primary/);
		await userEvent.click(buttonElement);

		expect(onClick).toHaveBeenCalled();
		expect(buttonElement).toHaveTextContent(/Clicked!/);
	});

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
