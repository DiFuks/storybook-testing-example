import { setProjectAnnotations } from '@storybook/react';

import * as globalStorybookConfig from '../../../.storybook/preview';

import 'jest-styled-components';
import '@testing-library/jest-dom/vitest';

setProjectAnnotations(globalStorybookConfig);
