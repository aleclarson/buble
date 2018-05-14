const Node = require('../Node.js');
const CompileError = require('../../utils/CompileError.js');

class ExportNamedDeclaration extends Node {
	initialise(transforms) {
		if (transforms.moduleExport)
			throw new CompileError('export is not supported', this);
		super.initialise(transforms);
	}
}

module.exports = ExportNamedDeclaration;
