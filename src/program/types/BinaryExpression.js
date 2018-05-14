const Node = require('../Node.js');

class BinaryExpression extends Node {
	transpile(code, transforms) {
		if (this.operator === '**' && transforms.exponentiation) {
			code.prependRight(this.start, `Math.pow( `);
			code.overwrite(this.left.end, this.right.start, `, `);
			code.appendLeft(this.end, ` )`);
		}
		super.transpile(code, transforms);
	}
}

module.exports = BinaryExpression;
