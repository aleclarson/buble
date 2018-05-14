function isArguments(node) {
	return node.type === 'Identifier' && node.name === 'arguments';
}

function spread(
	code,
	elements,
	start,
	argumentsArrayAlias,
	isNew
) {
	let i = elements.length;
	let firstSpreadIndex = -1;

	while (i--) {
		const element = elements[i];
		if (element && element.type === 'SpreadElement') {
			if (isArguments(element.argument)) {
				code.overwrite(
					element.argument.start,
					element.argument.end,
					argumentsArrayAlias
				);
			}

			firstSpreadIndex = i;
		}
	}

	if (firstSpreadIndex === -1) return false; // false indicates no spread elements

	if (isNew) {
		for (i = 0; i < elements.length; i += 1) {
			let element = elements[i];
			if (element.type === 'SpreadElement') {
				code.remove(element.start, element.argument.start);
			} else {
				code.prependRight(element.start, '[');
				code.prependRight(element.end, ']');
			}
		}

		return true; // true indicates some spread elements
	}

	let element = elements[firstSpreadIndex];
	const previousElement = elements[firstSpreadIndex - 1];

	if (!previousElement) {
		code.remove(start, element.start);
		code.overwrite(element.end, elements[1].start, '.concat( ');
	} else {
		code.overwrite(previousElement.end, element.start, ' ].concat( ');
	}

	for (i = firstSpreadIndex; i < elements.length; i += 1) {
		element = elements[i];

		if (element) {
			if (element.type === 'SpreadElement') {
				code.remove(element.start, element.argument.start);
			} else {
				code.appendLeft(element.start, '[');
				code.appendLeft(element.end, ']');
			}
		}
	}

	return true; // true indicates some spread elements
}

spread.isArguments = isArguments;
module.exports = spread;
