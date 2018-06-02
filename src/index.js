const acorn = require('acorn');
const acornDynamicImport = require('acorn-dynamic-import/lib/inject').default;
const Program = require('./program/Program.js');
const { features, matrix } = require('./support.js');
const getSnippet = require('./utils/getSnippet.js');

const { parse } = acornDynamicImport(acorn);

const dangerousTransforms = ['dangerousTaggedTemplateString', 'dangerousForOf'];

function target(target) {
	const targets = Object.keys(target);
	let bitmask = targets.length
		? 0b11111111111111111111
		: 0b01000000000000000000;

	Object.keys(target).forEach(environment => {
		const versions = matrix[environment];
		if (!versions)
			throw new Error(
				`Unknown environment '${environment}'. Please raise an issue at https://github.com/Rich-Harris/buble/issues`
			);

		const targetVersion = target[environment];
		if (!(targetVersion in versions))
			throw new Error(
				`Support data exists for the following versions of ${environment}: ${Object.keys(
					versions
				).join(
					', '
				)}. Please raise an issue at https://github.com/Rich-Harris/buble/issues`
			);
		const support = versions[targetVersion];

		bitmask &= support;
	});

	let transforms = Object.create(null);
	features.forEach((name, i) => {
		transforms[name] = !(bitmask & (1 << i));
	});

	dangerousTransforms.forEach(name => {
		transforms[name] = false;
	});

	return transforms;
}

function transform(source, options = {}) {
	let ast;

	try {
		ast = parse(source, {
			ecmaVersion: 9,
			preserveParens: true,
			sourceType: 'module',
			plugins: {
				dynamicImport: true
			}
		});
	} catch (err) {
		err.snippet = getSnippet(source, err.loc);
		err.toString = () => `${err.name}: ${err.message}\n${err.snippet}`;
		throw err;
	}

	let transforms = target(options.target || {});
	Object.keys(options.transforms || {}).forEach(name => {
		if (name === 'modules') {
			if (!('moduleImport' in options.transforms))
				transforms.moduleImport = options.transforms.modules;
			if (!('moduleExport' in options.transforms))
				transforms.moduleExport = options.transforms.modules;
			return;
		}

		if (!(name in transforms)) throw new Error(`Unknown transform '${name}'`);
		transforms[name] = options.transforms[name];
	});

	return new Program(source, ast, transforms, options).export(options);
}

exports.target = target;
exports.transform = transform;
exports.VERSION = require('../package.json').version;
