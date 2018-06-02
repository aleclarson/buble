const ArrayExpression = require('./ArrayExpression.js');
const ArrowFunctionExpression = require('./ArrowFunctionExpression.js');
const AssignmentExpression = require('./AssignmentExpression.js');
const BinaryExpression = require('./BinaryExpression.js');
const BreakStatement = require('./BreakStatement.js');
const CallExpression = require('./CallExpression.js');
const ClassBody = require('./ClassBody.js');
const ClassDeclaration = require('./ClassDeclaration.js');
const ClassExpression = require('./ClassExpression.js');
const ContinueStatement = require('./ContinueStatement.js');
const ExportDefaultDeclaration = require('./ExportDefaultDeclaration.js');
const ExportNamedDeclaration = require('./ExportNamedDeclaration.js');
const ForStatement = require('./ForStatement.js');
const ForInStatement = require('./ForInStatement.js');
const ForOfStatement = require('./ForOfStatement.js');
const FunctionDeclaration = require('./FunctionDeclaration.js');
const FunctionExpression = require('./FunctionExpression.js');
const Identifier = require('./Identifier.js');
const IfStatement = require('./IfStatement.js');
const ImportDeclaration = require('./ImportDeclaration.js');
const ImportDefaultSpecifier = require('./ImportDefaultSpecifier.js');
const ImportSpecifier = require('./ImportSpecifier.js');
const Literal = require('./Literal.js');
const LoopStatement = require('./shared/LoopStatement.js');
const MemberExpression = require('./MemberExpression.js');
const NewExpression = require('./NewExpression.js');
const ObjectExpression = require('./ObjectExpression.js');
const Property = require('./Property.js');
const ReturnStatement = require('./ReturnStatement.js');
const SpreadElement = require('./SpreadElement.js');
const Super = require('./Super.js');
const TaggedTemplateExpression = require('./TaggedTemplateExpression.js');
const TemplateElement = require('./TemplateElement.js');
const TemplateLiteral = require('./TemplateLiteral.js');
const ThisExpression = require('./ThisExpression.js');
const UpdateExpression = require('./UpdateExpression.js');
const VariableDeclaration = require('./VariableDeclaration.js');
const VariableDeclarator = require('./VariableDeclarator.js');

module.exports = {
	ArrayExpression,
	ArrowFunctionExpression,
	AssignmentExpression,
	BinaryExpression,
	BreakStatement,
	CallExpression,
	ClassBody,
	ClassDeclaration,
	ClassExpression,
	ContinueStatement,
	DoWhileStatement: LoopStatement,
	ExportNamedDeclaration,
	ExportDefaultDeclaration,
	ForStatement,
	ForInStatement,
	ForOfStatement,
	FunctionDeclaration,
	FunctionExpression,
	Identifier,
	IfStatement,
	ImportDeclaration,
	ImportDefaultSpecifier,
	ImportSpecifier,
	Literal,
	MemberExpression,
	NewExpression,
	ObjectExpression,
	Property,
	ReturnStatement,
	SpreadElement,
	Super,
	TaggedTemplateExpression,
	TemplateElement,
	TemplateLiteral,
	ThisExpression,
	UpdateExpression,
	VariableDeclaration,
	VariableDeclarator,
	WhileStatement: LoopStatement
};
