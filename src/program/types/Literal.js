const Node = require('../Node.js');
const CompileError = require('../../utils/CompileError.js');
const rewritePattern = require('regexpu-core');

class Literal extends Node {
	initialise() {
		if (typeof this.value === 'string') {
			this.program.indentExclusionElements.push(this);
		}
	}

	transpile(code, transforms) {
		if (transforms.numericLiteral) {
			if (this.raw.match(/^0[bo]/i)) {
				code.overwrite(this.start, this.end, String(this.value), {
					storeName: true,
					contentOnly: true
				});
			}
		}

		if (this.regex) {
			const { pattern, flags } = this.regex;

			if (transforms.stickyRegExp && /y/.test(flags))
				throw new CompileError(
					'Regular expression sticky flag is not supported',
					this
				);
			if (transforms.unicodeRegExp && /u/.test(flags)) {
				code.overwrite(
					this.start,
					this.end,
					`/${rewritePattern(pattern, flags)}/${flags.replace('u', '')}`,
					{
						contentOnly: true
					}
				);
			}
		}
	}
}

module.exports = Literal;
