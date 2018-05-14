const Node = require('../Node.js');

class TemplateElement extends Node {
	initialise() {
		this.program.indentExclusionElements.push(this);
	}
}

module.exports = TemplateElement;
