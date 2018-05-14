const Node = require('../Node.js');

class JSXExpressionContainer extends Node {
	transpile(code, transforms) {
		code.remove(this.start, this.expression.start);
		code.remove(this.expression.end, this.end);

		super.transpile(code, transforms);
	}
}

module.exports = JSXExpressionContainer;
