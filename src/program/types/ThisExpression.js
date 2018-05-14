const Node = require('../Node.js');
const { loopStatement } = require('../../utils/patterns.js');

class ThisExpression extends Node {
	initialise(transforms) {
		if (transforms.arrow) {
			const lexicalBoundary = this.findLexicalBoundary();
			const arrowFunction = this.findNearest('ArrowFunctionExpression');
			const loop = this.findNearest(loopStatement);

			if (
				(arrowFunction && arrowFunction.depth > lexicalBoundary.depth) ||
				(loop &&
					loop.body.contains(this) &&
					loop.depth > lexicalBoundary.depth) ||
				(loop && loop.right && loop.right.contains(this))
			) {
				this.alias = lexicalBoundary.getThisAlias();
			}
		}
	}

	transpile(code) {
		if (this.alias) {
			code.overwrite(this.start, this.end, this.alias, {
				storeName: true,
				contentOnly: true
			});
		}
	}
}

module.exports = ThisExpression;
