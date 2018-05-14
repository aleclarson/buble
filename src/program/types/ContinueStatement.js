const Node = require('../Node.js');
const CompileError = require('../../utils/CompileError.js');
const { loopStatement } = require('../../utils/patterns.js');

class ContinueStatement extends Node {
	transpile(code) {
		const loop = this.findNearest(loopStatement);
		if (loop.shouldRewriteAsFunction) {
			if (this.label)
				throw new CompileError(
					'Labels are not currently supported in a loop with locally-scoped variables',
					this
				);
			code.overwrite(this.start, this.start + 8, 'return');
		}
	}
}

module.exports = ContinueStatement;
