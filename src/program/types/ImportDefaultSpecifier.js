const Node = require('../Node.js');

class ImportDefaultSpecifier extends Node {
	initialise(transforms) {
		this.findScope(true).addDeclaration(this.local, 'import');
		super.initialise(transforms);
	}
}

module.exports = ImportDefaultSpecifier;
