const Node = require('../Node.js');
const spread = require('../../utils/spread.js');
const removeTrailingComma = require('../../utils/removeTrailingComma.js');
const { isArguments } = spread;

class NewExpression extends Node {
	initialise(transforms) {
		if (transforms.spreadRest && this.arguments.length) {
			const lexicalBoundary = this.findLexicalBoundary();

			let i = this.arguments.length;
			while (i--) {
				const arg = this.arguments[i];
				if (arg.type === 'SpreadElement' && isArguments(arg.argument)) {
					this.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
					break;
				}
			}
		}

		super.initialise(transforms);
	}

	transpile(code, transforms) {
		super.transpile(code, transforms);

		if (transforms.spreadRest && this.arguments.length) {
			const firstArgument = this.arguments[0];
			const isNew = true;
			let hasSpreadElements = spread(
				code,
				this.arguments,
				firstArgument.start,
				this.argumentsArrayAlias,
				isNew
			);

			if (hasSpreadElements) {
				code.prependRight(
					this.start + 'new'.length,
					' (Function.prototype.bind.apply('
				);
				code.overwrite(
					this.callee.end,
					firstArgument.start,
					', [ null ].concat( '
				);
				code.appendLeft(this.end, ' ))');
			}
		}

		if (this.arguments.length) {
			removeTrailingComma(code, this.arguments[this.arguments.length - 1].end);
		}
	}
}

module.exports = NewExpression;
