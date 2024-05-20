import { type FC, type HTMLAttributes, type MouseEventHandler, useState } from 'react';
import styled from 'styled-components';

type ButtonVariant = `primary` | `secondary`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ variant = `primary`, onClick, children, ...props }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
		setIsClicked(prevIsClicked => !prevIsClicked);
		onClick?.(event);
	};

	return (
		<ButtonStyled {...props} variant={variant} onClick={handleClick}>
			{isClicked ? `Clicked!` : children}
		</ButtonStyled>
	);
};

interface ButtonStyledProps {
	variant: ButtonVariant;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	color: white;
	background-color: ${props => (props.variant === `primary` ? `#007bff` : `#6c757d`)};
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${props => (props.variant === `primary` ? `#0056b3` : `#545b62`)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}
`;
