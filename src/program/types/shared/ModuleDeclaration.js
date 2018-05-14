const Node = require('../../Node.js');
const CompileError = require('../../../utils/CompileError.js');

class ModuleDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleImport)
			throw new CompileError('Modules are not supported', this);
		super.initialise(transforms);
	}
}

module.exports = ModuleDeclaration;
