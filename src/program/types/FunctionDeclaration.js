const Node = require('../Node.js');
const CompileError = require('../../utils/CompileError.js');
const removeTrailingComma = require('../../utils/removeTrailingComma.js');

class FunctionDeclaration extends Node {
	initialise(transforms) {
		if (this.generator && transforms.generator) {
			throw new CompileError('Generators are not supported', this);
		}

		this.body.createScope();

		if (this.id) {
			this.findScope(true).addDeclaration(this.id, 'function');
		}
		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);
		if (transforms.trailingFunctionCommas && this.params.length) {
			removeTrailingComma(code, this.params[this.params.length - 1].end);
		}
	}
}

module.exports = FunctionDeclaration;
