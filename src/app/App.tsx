import { type FC } from 'react';

import { Button } from '../shared/ui/Button/Button';

export const App: FC = () => (
	<div>
		Hello world <Button>Click me!</Button> <Button variant='secondary'>Click me</Button>
	</div>
);
