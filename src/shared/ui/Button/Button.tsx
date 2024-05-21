import { type FC, type HTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonVariant = `primary` | `secondary`;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ variant = `primary`, ...props }) => (
	<ButtonStyled {...props} variant={variant} />
);

interface ButtonStyledProps {
	variant: ButtonVariant;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
	padding: 10px 20px;
	border: none;
	border-radius: 30px;
	color: white;
	background-color: ${props => (props.variant === `primary` ? `#083e75` : `#6c757d`)};
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${props => (props.variant === `primary` ? `#083e75` : `#545b62`)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}
`;
