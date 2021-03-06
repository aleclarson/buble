const Node = require('../Node.js');

class SpreadElement extends Node {
	transpile(code, transforms) {
		if (this.parent.type == 'ObjectExpression') {
			code.remove(this.start, this.argument.start);
			code.remove(this.argument.end, this.end);
		}

		super.transpile(code, transforms);
	}
}

module.exports = SpreadElement;
