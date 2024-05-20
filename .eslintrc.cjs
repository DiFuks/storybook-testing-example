require(`@rushstack/eslint-patch/modern-module-resolution`);

module.exports = {
	extends: ['eslint-config-fuks'],
	rules: {
		'@typescript-eslint/no-use-before-define': 'off',
	}
};
