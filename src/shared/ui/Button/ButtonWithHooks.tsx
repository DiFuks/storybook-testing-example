import { type FC, type MouseEventHandler, useState } from 'react';

import { Button, type ButtonProps } from './Button';

export const ButtonWithHooks: FC<ButtonProps> = ({ onClick, children, ...props }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
		setIsClicked(prevIsClicked => !prevIsClicked);
		onClick?.(event);
	};

	return (
		<Button {...props} onClick={handleClick}>
			{isClicked ? `Clicked!` : children}
		</Button>
	);
};
