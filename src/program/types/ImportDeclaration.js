const Node = require('../Node.js');
const CompileError = require('../../utils/CompileError.js');

class ImportDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleImport)
			throw new CompileError('import is not supported', this);
		super.initialise(transforms);
	}
}

module.exports = ImportDeclaration;
