const Node = require('../Node.js');
const reserved = require('../../utils/reserved.js');

class MemberExpression extends Node {
	transpile(code, transforms) {
		if (transforms.reservedProperties && reserved[this.property.name]) {
			code.overwrite(this.object.end, this.property.start, `['`);
			code.appendLeft(this.property.end, `']`);
		}

		super.transpile(code, transforms);
	}
}

module.exports = MemberExpression;
