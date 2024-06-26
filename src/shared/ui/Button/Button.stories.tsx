import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button } from './Button';
import { ButtonWithHooks } from './ButtonWithHooks';

const meta = {
	component: Button,
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	args: { onClick: fn() },
	render: args => <ButtonWithHooks {...args} />,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: `Primary`,
		variant: `primary`,
	},
	play: async ({ canvasElement, args, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole(`button`);

		await expect(button).toHaveTextContent(/Primary/);

		await step(`First click`, async () => {
			await userEvent.click(button);

			await expect(args.onClick).toHaveBeenCalled();
			await expect(button).toHaveTextContent(/Clicked!/);
		});

		await step(`Second click`, async () => {
			await userEvent.click(button);

			await expect(button).toHaveTextContent(/Primary/);
		});
	},
};

export const Secondary: Story = {
	args: {
		children: `Secondary`,
		variant: `secondary`,
	},
};
