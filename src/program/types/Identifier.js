const Node = require('../Node.js');
const isReference = require('../../utils/isReference.js');
const { loopStatement } = require('../../utils/patterns.js');

class Identifier extends Node {
	findScope(functionScope) {
		if (this.parent.params && ~this.parent.params.indexOf(this)) {
			return this.parent.body.scope;
		}

		if (this.parent.type === 'FunctionExpression' && this === this.parent.id) {
			return this.parent.body.scope;
		}

		return this.parent.findScope(functionScope);
	}

	initialise(transforms) {
		if (isReference(this, this.parent)) {
			if (
				transforms.arrow &&
				this.name === 'arguments' &&
				!this.findScope(false).contains(this.name)
			) {
				const lexicalBoundary = this.findLexicalBoundary();
				const arrowFunction = this.findNearest('ArrowFunctionExpression');
				const loop = this.findNearest(loopStatement);

				if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
					this.alias = lexicalBoundary.getArgumentsAlias();
				}

				if (
					loop &&
					loop.body.contains(this) &&
					loop.depth > lexicalBoundary.depth
				) {
					this.alias = lexicalBoundary.getArgumentsAlias();
				}
			}

			this.findScope(false).addReference(this);
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

module.exports = Identifier;
