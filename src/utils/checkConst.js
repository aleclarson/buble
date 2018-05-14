const CompileError = require('./CompileError.js');

module.exports = checkConst; function checkConst(identifier, scope) {
	const declaration = scope.findDeclaration(identifier.name);
	if (declaration && declaration.kind === 'const') {
		throw new CompileError(`${identifier.name} is read-only`, identifier);
	}
}
