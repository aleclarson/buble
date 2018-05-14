const Node = require('../Node.js');

class JSXOpeningFragment extends Node {
	transpile(code, transforms) {
		code.overwrite(this.start, this.end, `${this.program.jsx}( React.Fragment, null`);
	}
}

module.exports = JSXOpeningFragment;
