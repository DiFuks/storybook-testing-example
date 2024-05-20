import type { Meta, StoryFn } from '@storybook/react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import path from 'node:path';
import { describe, expect, test } from 'vitest';

type StoryFile = {
	default: Meta;
	[name: string]: StoryFn | Meta;
};

const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
	try {
		return composeStories(entry);
	} catch (e) {
		throw new Error(`There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`);
	}
};

const getAllStoryFiles = () => {
	const storyFiles = Object.entries(
		import.meta.glob<StoryFile>(`../../../src/shared/ui/**/*.(stories|story).@(js|jsx|mjs|ts|tsx)`, {
			eager: true,
		}),
	);

	return storyFiles.map(([filePath, storyFile]) => {
		const storyDir = path.dirname(filePath);
		const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^./]+$/, ``);

		return { filePath, storyFile, componentName, storyDir };
	});
};

describe(`Stories Snapshots`, () => {
	getAllStoryFiles().forEach(({ storyFile, componentName }) => {
		const meta = storyFile.default;
		const title = meta.title || componentName;

		describe(title, () => {
			const stories = Object.entries(compose(storyFile)).map(([name, story]) => ({ name, story }));

			if (stories.length <= 0) {
				throw new Error(
					`No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`,
				);
			}

			stories.forEach(({ name, story }) => {
				test(name, async () => {
					const utils = render(story());
					await new Promise(resolve => {
						setTimeout(resolve, 1);
					});
					expect(utils.container).toMatchSnapshot();
				});
			});
		});
	});
});
